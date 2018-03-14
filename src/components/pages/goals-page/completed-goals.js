import React from "react";
import { connect } from "react-redux";

import CompletedCheckButton from "./completed-check-button";
import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";

export function CompletedGoals(props) {
  return (
    <div className="completed-goals">
      <h2 className="title">Hurray! You've Completed Your Goals!!</h2>
      <div className="todo-completed">
        <h3 className="heading">Your Completed Goals...</h3>
        <div className="lists">
          <table>
            <tbody>
              <tr>
                <td><CompletedCheckButton /></td>
                <td>{props.description}</td>
                <td>{props.created}</td>
                <td>{props.completed}</td>
                <td><TableButtons /></td>
              </tr>
            </tbody>  
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
