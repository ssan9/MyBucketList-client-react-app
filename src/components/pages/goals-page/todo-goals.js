import React from "react";
import { connect } from "react-redux";

import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
import "./todo-goals.css";

import TodoCheckButtons from "./todo-check-buttons";

//why not this.props.goal
export function TodoGoals(props) {
  console.log(props);
  let goals = props.goals.map((goal, index) => (
    <tr key={index}>
      <td>
        <TodoCheckButtons goalId={goal.id}/>
      </td>
      <td>{goal.description}</td>
      <td>Created: {goal.created}</td>
      <td>Due: {goal.due}</td>
      <td>
        <TableButtons goal={goal}/>
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
