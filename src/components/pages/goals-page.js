import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";

export function GoalsPage(props) {
  return (
    <div className="home">
      <h2>Goals</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GoalsPage);
