import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import "./app.css";
import NavigationBar from "./pages/reusable-components/navigation-bar";
import LandingPage from "./pages/landing-page/landing-page";
import LoginPage from "./pages/login-page/login-page";
import SignupPage from "./pages/signup-page/signup-page";
import CreateItemPage from "./pages/create-item-page/create-item-page";
import GoalsPage from "./pages/goals-page/goals-page";
import EditPage from "./pages/edit-page/edit-page"
// import Dashboard from "./dashboard";
// import RegistrationPage from "./registration-page";
import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  // <Route exact path="/dashboard" component={Dashboard} />
  // <Route exact path="/register" component={RegistrationPage} />
  render() {
    return (
      <div className="app">
        <NavigationBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/create" component={CreateItemPage} />
        <Route exact path="/goals" component={GoalsPage} />
        <Route exact path="/edit/:id/:description/:category/:due" component={EditPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
