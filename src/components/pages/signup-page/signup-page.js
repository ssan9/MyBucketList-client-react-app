import React from "react";
import { connect } from "react-redux";
// import {BrowserRouter as Router} from "react-router-dom";
// import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
// import Input from "../../input";
import SignupForm from "./signup-form";

import "./signup-page.css";



export class SignupPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    const { username, password } = values;
    // const user = { username, password, firstName, lastName };
    this.props
      .dispatch(registerUser(values))
      .then(() => this.props.dispatch(login(username, password)))
      // .catch(err => {const message = "Wrong"})
      .then(() => this.props.history.push('/create'));
  }
//  
  render() {
    return (
      <div className="signup-form">
        <h2 className="title">Signup</h2>

        <SignupForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});



export default connect(mapStateToProps)(SignupPage);
