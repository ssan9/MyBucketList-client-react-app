import React from "react";
import { connect } from "react-redux";

import { putGoal, deleteGoal } from "../../../actions/index";

import "./todo-check-buttons.css";
// import { Link, Redirect } from "react-router-dom";
export function TodoCheckButtons(props) {
  console.log(props);
  let updateGoal = {
      completed: true
  }

  return (
    <div className="change-buttons">
      <button className="done-button update-buttons" onClick={() => 
          props.dispatch(putGoal(updateGoal))
        }>
        <span role="img" aria-label="Click done">
          &#10004;
        </span>
        
      </button>
      <button className="remove-button update-buttons" onClick={() => props.dispatch(deleteGoal(props.goalId))}>
        <span role="img" aria-label="Click cancel">
          &#x274C;
        </span>
        
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TodoCheckButtons);
