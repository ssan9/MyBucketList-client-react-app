import React from "react";
import { connect } from "react-redux";

import ToDoGoals from "./todo-goals";
import CompletedGoals from "./completed-goals";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";

export function GoalsPage(props) {
  return (
    <div className="goals">
    	<ToDoGoals />
		<CompletedGoals />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GoalsPage);
