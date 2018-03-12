import React from "react";
import { connect } from "react-redux";

import TableButtons from "./table-buttons";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
import TodoCheckButtons from "./todo-check-buttons";

export function TodoGoals(props) {
  return (
    <div className="todo-goals">
    	<h2 className="title">Yay! View Your Goals!</h2>
    	<div className="todo-completed">
 			<h3 className="heading">Your To Do Goals...</h3>
	 		<div className="lists">
	 			<table>
					<tr>
						<TodoCheckButtons />
						<td>{props.description}</td>
						<td>{props.created}</td>
						<td>{props.due}</td>
						<TableButtons />
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

export default connect(mapStateToProps)(TodoGoals);






