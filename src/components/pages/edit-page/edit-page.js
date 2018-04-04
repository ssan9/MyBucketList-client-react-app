import React from "react";
import { connect } from "react-redux";

import { putGoal } from "../../../actions/index";

// import { Link, Redirect } from "react-router-dom";

// import "./create-item-page.css";

export class EditPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  onSubmit(event) {
    console.log(this, "this");
    console.log(this.props, "props");

    // console.log(match);
    event.preventDefault();
    let goal = {
        id: this.props.match.params.id,
        description: this.refs.description.value,
        category: this.refs.category.value,
        due: this.refs.due.value
      };
    // const value = this.input.value;
    this.props.dispatch(putGoal(goal));
    this.props.history.push(`/goals/`);
    // this.input.value = "";
    // this.input.focus();
  }

  onClick(event) {
      this.refs.description.value="";
      this.refs.category.value="";
      this.refs.due.value="";
    };

  render() {
    return (
      <div className="create-item">
        <h2 className="title">Edit Your Goal!</h2>
        <form className="goal-creation-form" onSubmit={e => this.onSubmit(e)}>
          <div className="fields">
            <input
              type="text"
              name="description"
              ref="description"
              id="description"
              className="create-goal"
              aria-labelledby="Describe Your Goal!"
              placeholder="Description"
              defaultValue={this.props.match.params.description || ''} 
              required
            />
            <select name="category" 
              ref="category" 
              id="category"
              aria-label="category" 
              className="create-goal"
              defaultValue={this.props.match.params.category || ''} 
              required>
                <option value="0">Category</option>
                <option value="Sports">Sports</option>
                <option value="Events">Events</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Travel">Travel</option>
                <option value="Academics">Academics</option>
                <option value="Challenge your Limits">Challenge your Limits</option>
                <option value="Other">Other</option>
            </select>
            <input
              type="date"
              name="due-date"
              ref="due"
              id="due-date"
              className="create-goal"
              aria-labelledby="Due Date"
              placeholder="Due Date"
              defaultValue={this.props.match.params.due || ''}
              required
            />
            <div className="form-submit">
              <button
                type="submit"
                className="cancel-button button"
                id="cancel"
                onClick={e => this.onClick(e)}
              >
                Cancel
              </button>
              <button type="submit" className="save-button button" id="save">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(EditPage);
