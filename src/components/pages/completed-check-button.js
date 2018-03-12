import React from "react";
import { connect } from "react-redux";

import "./completed-check-button.css";
// import { Link, Redirect } from "react-router-dom";
// import "./completed-check-buttons.css";

export function CompletedCheckButton(props) {
  return (
    <div className="completed-check-button">
    	<div className="change-button">
				<button className="delete-button" aria-label="Cancel">&#x274C;</button>
			</div>			
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CompletedCheckButton);



