import React from "react";
import { connect } from "react-redux";

import "./completed-check-button.css";
// import { Link, Redirect } from "react-router-dom";

export function CompletedCheckButton(props) {
  return (
    <div className="completed-check-button">
    	<div className="change-button">
			<button className="delete-button"><span role="img" aria-label="Click cancel">&#x274C;</span></button>
		</div>			
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CompletedCheckButton);



