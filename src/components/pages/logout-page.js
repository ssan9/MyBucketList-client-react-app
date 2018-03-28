import React from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";

import {title, landingLinks, links} from "./nav-links-and-titles-page";

import "./landing-page.css";

export function LogoutPage(props) {
  return (
    <div className="home">
		<h2>Landing</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
