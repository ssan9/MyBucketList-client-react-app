import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./create-item-page.css";

export function CreateItemPage(props) {
  return (
    <div className="home">
      <h2>Create</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateItemPage);
