import React from "react";
import { connect } from "react-redux";

import "./table-buttons.css";
// import { Link, Redirect } from "react-router-dom";

export function TableButtons(props) {
  return (
    <div className="table-buttons">
    					<td className="edit" aria-label="edit"><button className="edit action-buttons">Edit</button></td>
						<td className="share" aria-label="share"><button className="share action-buttons">Share</button></td>
	</div>	
      			
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TableButtons);






