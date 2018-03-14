import React from "react";
import { connect } from "react-redux";

import "./todo-check-buttons.css";
// import { Link, Redirect } from "react-router-dom";
export function TodoCheckButtons(props) {
  return (
    <div className="change-buttons">
		<button className="done-button update-buttons"><span role="img" aria-label="Click done">&#10004;</span></button>
		<button className="remove-button update-buttons"><span role="img" aria-label="Click cancel">&#x274C;</span></button>				
	</div>	
      			
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TodoCheckButtons);



