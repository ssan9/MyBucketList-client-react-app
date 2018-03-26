// import PropTypes from 'prop-types';

// import assert from 'assert';

// import objectToGetParams from './utils/objectToGetParams';
// import createShareButton from './utils/createShareButton';

// function facebookLink(url, { quote, hashtag }) {
//   assert(url, 'facebook.url');

//   return 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams({
//     u: url,
//     quote,
//     hashtag,
//   });
// }

// const FacebookShareButton = createShareButton('facebook', facebookLink, (props) => {
//   /* eslint-disable no-console */
//   if (props.picture) {
//     console.warn('FacebookShareButton warning: picture is a deprecated prop.');
//   }

//   if (props.title) {
//     console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
//   }

//   if (props.description) {
//     console.warn(`FacebookShareButton warning: description is a deprecated prop.
//       Use "quote" instead.`);
//   }
//   /* eslint-enable no-console */

//   return {
//     quote: props.quote,
//     hashtag: props.hashtag,
//   };
// }, {
//   quote: PropTypes.string,
//   hashtag: PropTypes.string,
// }, {
//   windowWidth: 550,
//   windowHeight: 400,
// });

// export default FacebookShareButton;

import React from "react";

export function FacebookShareButton(props) {
	<script>(function(d, s, id) {
				  const js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));</script>
	return (
		<div id="fb-root">
				

			<div className="fb-like" 
			 data-layout="standard" data-action="like" data-size="small" 
			 data-show-faces="true" data-share="true"></div>
		</div>	 
	);
}