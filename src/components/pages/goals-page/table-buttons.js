import React from "react";
import { connect } from "react-redux";

import "./table-buttons.css";
// import { Link, Redirect } from "react-router-dom";

export function TableButtons(props) {
  return (
    <div className="table-buttons">
    	<button className="edit action-buttons">Edit</button>
		<button className="share action-buttons">Share</button>
	</div>	
      			
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TableButtons);






