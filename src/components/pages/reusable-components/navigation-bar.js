import React from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import "./navigation-bar.css";
import { title, landingLinks, links } from "./nav-links-data";

export default function NavigationBar(props) {
  let displayLinks = props.loggedIn ? links : landingLinks;

  const linkElements = displayLinks.map((link, index) => {
    return (
      <li key={index}>
        <Link to={link.href}>{link.text}</Link>
      </li>
    );
  });

  return (
    <nav className="navigation-bar">
      <h1 className="current" id="app-name">
        <Link to="/">MyBucketList</Link>
      </h1>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <div className="nav-bar">
        <ul>{linkElements}</ul>
      </div>
    </nav>
  );
}
