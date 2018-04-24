import React from "react";
import { connect } from "react-redux";
import Footer from "../reusable-components/footer";

import { postTodoGoal } from "../../../actions/index";
import requiresLogin from '../../requires-login';

// import { Link, Redirect } from "react-router-dom";

import "./create-item-page.css";

export class CreateItemPage extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let goal = {
      description: this.refs.description.value,
      category: this.refs.category.value,
      due: this.refs.due.value
    };
    this.props.dispatch(postTodoGoal(goal));
    this.props.history.push(`/goals/`);
  }
  onClick(event) {
    this.refs.description.value = "";
    this.refs.category.value = "";
    this.refs.due.value = "";
  }

  render() {
    return (
      <div className="create-item">
        <h2 className="title">Create Your Goal!</h2>
        <form className="goal-creation-form" onSubmit={e => this.onSubmit(e)}>
          <div className="fields">
            <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                ref="description"
                id="description"
                className="create-goal"
                aria-labelledby="Describe Your Goal!"
                required
              />
            <label htmlFor="category">Category</label>

              <select
                name="category"
                ref="category"
                id="category"
                placeholder="category"
                aria-label="category"
                className="create-goal"
                required
              >
                <option value="0"></option>
                <option value="Sports">Sports</option>
                <option value="Events">Events</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Travel">Travel</option>
                <option value="Academics">Academics</option>
                <option value="Challenge your Limits">
                  Challenge your Limits
                </option>
                <option value="Other">Other</option>
              </select>

            <div className="due-date">
              <label htmlFor="due-date">Due Date</label>

                <input
                  type="date"
                  name="due-date"
                  ref="due"
                  id="due-date"
                  className="create-goal"
                  aria-labelledby="Due Date"
                  placeholder="Due Date"
                  required

                />
            </div>
            <div className="form-submit">
              <div className="buttons">
                <button type="submit" className="save-button button" id="save">
                  Save
                </button>
                <button
                  className="cancel-button button"
                  id="cancel"
                  onClick={e => this.onClick(e)}
                >
                  Cancel
                </button>
                
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(CreateItemPage));
