import React from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
import Input from "../../input";
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
  onSubmit(values) {
    console.log(values);
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div className="signup-form">
        <h2 className="title">Signup</h2>

        <form
          className="register-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <div className="top-row">
            <div className="fields">
              <Field
                component={Input}
                type="text"
                name="firstName"
                id="first-name"
                className="name register"
                autoComplete="off"
                aria-labelledby="First Name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="fields">
              <Field
                component={Input}
                type="text"
                name="lastName"
                id="last-name"
                className="name register"
                autoComplete="off"
                aria-labelledby="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="fields">
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              className="register"
              autoComplete="off"
              aria-labelledby="Username"
              placeholder="Username"
              required
            />
          </div>

          <div className="fields">
            <Field
              component={Input}
              type="email"
              name="email"
              id="email"
              className="register auth"
              autoComplete="off"
              aria-labelledby="Email address"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="fields">
            <Field
              component={Input}
              type="text"
              name="password"
              id="password"
              className="register auth"
              autoComplete="off"
              aria-labelledby="Password"
              placeholder="Password"
              required
            />
          </div>

          <h4 className="terms">
            By Signing up you agree to the Terms and Conditions
          </h4>

          <button type="submit" className="create-account">
            Register
          </button>
        </form>
      </div>
    );
  }
}
//
// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(SignupPage);

//
// export default connect(mapStateToProps)(SignupPage);
