import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; 
import LoginForm from "../../login-form.js";
import { login } from "../../../actions/auth";
import Footer from "../reusable-components/footer";

import "./login-page.css";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  submit = values => {
    console.log(values)
    const { username, password } = values;
    this.props
    .dispatch(login(username, password))
    .then(() => this.props.history.push('/goals'))
    .catch(err => this.setState({ error: "Incorrect username or password" }));
  };

 render() {
  return (
    <div className="login">
      <h2 className="title">Login</h2>
      <LoginForm onSubmit={this.submit} error_message={this.state.error}
       />
      <h1 className="signup-request">If new user,  <Link to="/signup" className="signup-link">Signup</Link></h1>
      <Footer />
    </div>
  );
 }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
