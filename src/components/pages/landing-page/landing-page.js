import React from "react";
import { connect } from "react-redux";
import { Options } from "./options";
import { ImageList } from "./image-list";
import { UserStories } from "./user-stories";
import { Footer } from "../reusable-components/footer";

import "../reusable-components/float-grid.css";

// import { Link, Redirect } from "react-router-dom";

// import { title, landingLinks, links } from "./nav-links-and-titles-page";
import "./landing-page.css";

export function LandingPage(props) {
  <style>
    @import url('https://fonts.googleapis.com/css?family=Spirax');
  </style>
  return (
    <div className="landing-page">
      <div className="bucketlist-image">
        <div className="landing-title">
          <h2 className="dream-title">
            Create a BucketList, Fulfill Your Dreams...
          </h2>
        </div>
        <div className="tab-group">
          <ul>
            <li>
              <a href="signup">Signup</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
          </ul>
        </div>
      </div>

      <Options />

      <ImageList />

      <UserStories />

      <Footer />

    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
