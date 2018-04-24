import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
import Footer from "../reusable-components/footer";
import SignupForm from "./signup-form";
import "./signup-page.css";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  submit = values => {
    const { username, password } = values;
    // const user = { username, password, firstName, lastName };
    this.props
      .dispatch(registerUser(values))
      .then(() => this.props.dispatch(login(username, password)))

      .then(() => this.props.history.push("/create"))
      .catch(err => this.setState({ error: "Username is already taken" }));
  };
  
  render() {
    return (
      <div className="signup-form">
        <h2 className="title">Signup</h2>

        <SignupForm onSubmit={this.submit} error_message={this.state.error} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
