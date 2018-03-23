import React from "react";
import { connect } from "react-redux";

import { deleteGoal, goalId } from "../../../actions/index";

import "./completed-check-button.css";
// import { Link, Redirect } from "react-router-dom";

export function CompletedCheckButton(props) {
  // let goalId = deleteGoal.id;
  return (
    <div className="completed-check-button">
      <div className="change-button">
        <button className="delete-button" onClick={() => props.dispatch(deleteGoal(props.goalId))}>
          <span role="img" aria-label="Click cancel">
            &#x274C;
          </span>
          
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CompletedCheckButton);
