import React from "react";
import { connect } from "react-redux";

import CompletedCheckButton from "./completed-check-button";
import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";

export function CompletedGoals(props) {
  console.log(props);
  let goals = props.goals.map((goal, index) => (
    <tr key={index}>
      <td>
        <CompletedCheckButton goalId={goal.id}/>
      </td>
      <td>{goal.description}</td>
      <td>Created: {goal.created}</td>
      <td>Completed: {goal.completed}</td>
      <td>
        <TableButtons goalId={ goal.id } />
      </td>
    </tr>
  ));
  return (
    <div className="completed-goals">
      <h2 className="title">Hurray! You've Completed Your Goals!!</h2>
      <div className="todo-completed">
        <h3 className="heading">Your Completed Goals...</h3>
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

export default connect(mapStateToProps)(CompletedGoals);
