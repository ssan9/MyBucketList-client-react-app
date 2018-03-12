import React from "react";
import { connect } from "react-redux";


// import { Link, Redirect } from "react-router-dom";
import "./goals-table.css";

export function GoalsTable(props) {
  return (
    <div className="goals-table">
    	<h2 className="title">{props.title}</h2>
      		<div className="todo-completed">
      			<h3 className="heading">{props.heading}</h3>
      			<div className="lists">
	 			<table>
      				<tr>
      					<div className="change-button">
						<button className="delete-button" aria-label="Cancel">&#x274C;</button>
						</div>
						<td>{props.description}</td>
						<td>{props.created}</td>
						<td>{props.completed}</td>
						<td className="edit" aria-label="edit"><button className="edit action-buttons">Edit</button></td>
						<td className="share" aria-label="share"><button className="share action-buttons">Share</button></td>
					</tr>
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
