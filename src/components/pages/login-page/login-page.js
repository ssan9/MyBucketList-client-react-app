import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //Redirect was also there with Link after a comma
import LoginForm from "../../login-form.js";
// import {BrowserRouter as Router} from "react-router-dom";
// import { Field, reduxForm, focus } from "redux-form";
// import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
// import Input from "../../input";
// import SignupForm from "./signup-form";


import "./login-page.css";

// const passwordLength = length({ min: 10, max: 72 });
// const matchesPassword = matches("password");

export class LoginPage extends React.Component {
	submit = values => {
    // print the form values to the console
    console.log(values)
    const { username, password } = values;
    this.props.dispatch(login(username, password));
    return this.props.history.push('goals');

}

 render() {
  return (
    <div className="login">
      <h2 className="title">Login</h2>
      <LoginForm onSubmit={this.submit}
       />
      <h1 className="signup-request">If new user,  <Link to="/signup" className="signup-link">Signup</Link></h1>

    </div>
  );
 }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
