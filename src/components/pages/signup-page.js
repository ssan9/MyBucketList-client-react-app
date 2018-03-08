import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./signup-page.css";

export function SignupPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>signup</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
