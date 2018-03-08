import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "../login-form";
import "./login-page.css";

export function LoginPage(props) {
  return (
    <div className="home">
      <h2>Logins</h2>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
