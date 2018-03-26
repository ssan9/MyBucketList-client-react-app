import React from "react";
import { connect } from "react-redux";

import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
import "./todo-goals.css";

import { putGoal } from "../../../actions/index";

import TodoCheckButtons from "./todo-check-buttons";

//why not this.props.goal

export class TodoGoals extends React.Component {
  toggleChecked(goal) {
    goal.checked = !goal.checked;
    this.props.dispatch(putGoal(goal));
  }

  render() {
    let goals = this.props.goals.map((goal, index) => (
      <tr key={index}>
        <td onClick={() => this.toggleChecked(goal)}>
          {goal.checked ? "[X]" : "[  ]"}
        </td>

        <td>{goal.description}</td>
        <td>{goal.category}</td>
        <td>{goal.created}</td>
        <td>{goal.due}</td>
        <td>
          <TableButtons goal={goal} />
        </td>
      </tr>
    ));
    return (
      <div className="todo-goals">
        <h2 className="title">Yay! View Your Goals!</h2>
        <div className="todo-completed">
          <h3 className="heading">{this.props.title}</h3>
          <div className="lists">
            <table>
              <thead className="header">
                <tr>
                  <th>Checked</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Created</th>
                  <th>Due</th>
                  <th />
                </tr>
              </thead>
              <tbody>{goals}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TodoGoals);
