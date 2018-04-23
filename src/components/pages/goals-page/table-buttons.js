import React from "react";
import { connect } from "react-redux";
// import { initialize } from "redux-form";
// import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import { deleteGoal } from "../../../actions/index";
import "../images/facebook-share-button.png";

// import FacebookShareButton from "./fb-share-button";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import TestComponent from "./social-buttons";

import "./table-buttons.css";
// import { Link, Redirect } from "react-router-dom";
// why do we have {""} in return?
export function TableButtons(props) {
  console.log(props);
  
  // componentDidMount() {
  //   this.handleInitialize();
  // }
  const currentGoal = {
    id: props.goal.id,
    description: props.goal.description,
    category: props.goal.category,
    created: props.goal.created,
    due: props.goal.due
  };
  // props.initialize(currentGoal);`

  return (
    <div className="table-buttons">
      <Link
        to={`/edit/${currentGoal.id}/${currentGoal.description}/${currentGoal.category}/${currentGoal.due}`}>
        {" "}
        <button className="edit action-buttons correction-buttons">Edit</button>
      </Link>
        {/*<a target="_blank" rel="noreferrer noopener" href="http://www.facebook.com/sharer/sharer.php"><img src = {require("../images/share-fb.jpg")} id = "share_button" className="action-buttons" alt="fb-share"/></a>*/}
<button className="share action buttons"><a target="_blank" rel="noreferrer noopener" href="http://www.facebook.com/sharer/sharer.php">Share</a></button>

      <button 
        className="delete action-buttons correction-buttons"
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
