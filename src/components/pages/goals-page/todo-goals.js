import React from "react";
import { connect } from "react-redux";

import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
import "./todo-goals.css";

import { putGoal } from "../../../actions/index";


//why not this.props.goal
//how does computer know what does check mean?
export class TodoGoals extends React.Component {
  toggleChecked(goal) {
    goal.checked = !goal.checked;
    this.props.dispatch(putGoal(goal));
  }

  render() {
    let goals = this.props.goals.map((goal, index) => (

      <tr key={index}>
       
        <td onClick={() => this.toggleChecked(goal)}>
          {goal.checked ? <span className="checkbox" data-label="checked">&#x2612;</span> : <span className="checkbox" data-label="unchecked">&#x25a2;</span>}
        </td>

        <td data-label="description">{goal.description}</td>
        <td data-label="category">{goal.category}</td>
        <td data-label="created">{goal.created}</td>
        <td data-label="due">{goal.due}</td>
        <td>
            <TableButtons goal={goal} />
        </td>
      </tr>
                
    ));
    
    return (
      <div className="todo-goals">
        <h2 className="title">{this.props.title}</h2>
        <div className="todo-completed">
          <h3 className="heading">{this.props.heading}</h3>
          <div className="lists">
            <table>
              <thead className="header">
                <tr>
                  <th>{this.props.header}</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>{this.props.date}</th>
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
