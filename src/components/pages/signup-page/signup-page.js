import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
// import { Link, Redirect } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
import Input from "../../input";
import SignupForm from "./signup-form";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../../validators";
import "./signup-page.css";

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class SignupPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    const { username, password, firstName, lastName, email } = values;
    // const user = { username, password, firstName, lastName };
    this.props
      .dispatch(registerUser(values))
      .then(() => this.props.dispatch(login(username, password)));  
    return this.props.history.push('/view');
  }

  render() {
    return (
      <div className="signup-form">
        <h2 className="title">Signup</h2>

        <SignupForm onSubmit={this.submit} />
      </div>
    );
  }
}
//
// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default SignupPage;

//
export default connect()(SignupPage);
