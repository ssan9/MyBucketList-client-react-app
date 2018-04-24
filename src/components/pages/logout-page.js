import React from "react";
import { connect } from "react-redux";

export function LogoutPage(props) {
  return (
    <div className="home">
		<h2>Landing</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogoutPage);
