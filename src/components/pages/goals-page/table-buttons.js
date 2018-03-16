import React from "react";
import { connect } from "react-redux";

import { updateTodoGoals, shareGoals } from "../../../actions/index";

import "./table-buttons.css";
// import { Link, Redirect } from "react-router-dom";

export function TableButtons(props) {
  return (
    <div className="table-buttons">
      <button className="edit action-buttons">
        Edit onClick={() => 1
        /*Redirect to the edit page! and prepopulate the fields*/
        }
      </button>
      <button className="share action-buttons">
        Share onClick={() => props.dispatch(shareGoals())}
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TableButtons);
