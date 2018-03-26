import React from "react";
import { connect } from "react-redux";
// import { initialize } from "redux-form";
// import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import { deleteGoal } from "../../../actions/index";
// import FacebookShareButton from "./fb-share-button";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TestComponent from "./social-buttons";

import "./table-buttons.css";
// import { Link, Redirect } from "react-router-dom";

export function TableButtons(props) {
  console.log(props);
  
  // componentDidMount() {
  //   this.handleInitialize();
  // }
  const currentGoal = {
    id: props.goal.id,
    description: props.goal.description,
    created: props.goal.created,
    due: props.goal.due
  };
  // props.initialize(currentGoal);

  return (
    <div className="table-buttons">
      <Link
        to={`/edit/${currentGoal.id}/${currentGoal.description}/${
          currentGoal.due
        }`}
      >
        {" "}
        <button className="edit action-buttons">Edit</button>
      </Link>
      <button className="share action-buttons"> <TestComponent /></button>
      <button 
        className="delete action-buttons"
        onClick={() => props.dispatch(deleteGoal(props.goal.id))}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TableButtons);
