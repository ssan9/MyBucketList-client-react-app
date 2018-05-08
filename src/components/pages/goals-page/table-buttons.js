import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGoal } from "../../../actions/index";
import "./table-buttons.css";

export function TableButtons(props) {  
  const currentGoal = {
    id: props.goal.id,
    description: props.goal.description,
    category: props.goal.category,
    created: props.goal.created,
    due: props.goal.due
  };

  return (
    <div className="table-buttons">
      <Link
        to={`/edit/${currentGoal.id}/${currentGoal.description}/${currentGoal.category}/${currentGoal.due}`}>
        {" "}
        <button className="edit action-buttons correction-buttons">Edit</button>
      </Link>
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
