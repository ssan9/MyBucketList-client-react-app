import React from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";

import "./signup-page.css";

export function SignupPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  // if (props.loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="signup-form">
      <h2 className="title">Signup</h2>
        <form className="register-form">
            <div className="top-row">
            <div className="fields">

            <input 
              type="text" 
              name="first-name" 
              id="first-name" 
              className="name register"
              autoComplete="off"
              aria-labelledby="First Name"
              placeholder="First Name"
              required
            />
            </div>
                        <div className="fields">

            <input 
              type="text"
              name="last-name"
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

            <input 
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

            <input 
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

            <input
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

          <h4 className="terms">By Signing up you agree to the Terms and Conditions</h4>

        <button type="submit" className="create-account">
            CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
