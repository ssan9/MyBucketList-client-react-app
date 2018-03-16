import React from "react";
import { connect } from "react-redux";

import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
import TodoCheckButtons from "./todo-check-buttons";

export function TodoGoals(props) {
  let goals = props.goals.map(goal => (
    <tr>
      <td>
        <TodoCheckButtons />
      </td>
      <td>{goal.description}</td>
      <td>{goal.created}</td>
      <td>{goal.due}</td>
      <td>
        <TableButtons />
      </td>
    </tr>
  ));
  return (
    <div className="todo-goals">
      <h2 className="title">Yay! View Your Goals!</h2>
      <div className="todo-completed">
        <h3 className="heading">Your To Do Goals...</h3>
        <div className="lists">
          <table>
            <tbody>{goals}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TodoGoals);
