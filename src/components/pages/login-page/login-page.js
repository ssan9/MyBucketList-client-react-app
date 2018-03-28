import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //Redirect was also there with Link after a comma
import LoginForm from "../../login-form.js";

import "./login-page.css";

export function LoginPage(props) {
  return (
    <div className="login">
      <h2 className="title">Login</h2>
      <LoginForm />
      
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
