 //  1) var path = require('path');
// var express = require('express');
// var webpack = require('webpack');
// var config = require('./webpack.config.dev');

// var app = express();
// var compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(3000, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('Listening at http://localhost:3000');
// });

// 2) const express = require('express');
// const cors = require('cors');
// const {CLIENT_ORIGIN} = require('./config');

// const app = express();

// app.use(
//     cors({
//         origin: CLIENT_ORIGIN
//     })
// );

// const board = {
//     lists: [
//         {
//             title: 'Example list 1',
//             cards: [
//                 {
//                     text: 'Example card 1'
//                 },
//                 {
//                     text: 'Example card 2'
//                 }
//             ]
//         },
//         {
//             title: 'Example list 2',
//             cards: [
//                 {
//                     text: 'Example card 1'
//                 },
//                 {
//                     text: 'Example card 2'
//                 }
//             ]
//         }
//     ]
// };

// app.get('/api/goals', (req, res) => {
//     res.json(goals);
// });

// app.listen(8080);

4) 'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('./config');
const { BucketList } = require('./models');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());

app.get('/api/goals', (req, res) => {
  BucketList
    .find()
    .then(goals => {
      res.json(goals.map(goal => goal.serialize()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

app.get('/goals/:id', (req, res) => {
  BucketList
    .findById(req.params.id)
    .then(goal => res.json(goal.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went horribly awry' });
    });
});

app.post('/api/goals', (req, res) => {
  const requiredFields = ['description', 'created', 'due'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  BucketList
    .create({
      description: req.body.description,
      category: req.body.category,
      due_date: req.body.due_date
    })
    .then(bucketList => res.status(201).json(bucketList.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    });

});


app.delete('/api/goals/:id', (req, res) => {
  BucketList
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({ message: 'success' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});


app.put('/api/goals/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['description', 'category', 'due_date'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  BucketList
    .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
    .then(updatedGoal => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Something went wrong' }));
});


app.delete('/:id', (req, res) => {
  BucketList
    .findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`Deleted bucketlist with id \`${req.params.id}\``);
      res.status(204).end();
    });
});


app.use('*', function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };
