import React from "react";

import { Link } from "react-router-dom"; //Redirect was also there after comma
import "./navigation-bar.css";
import { landingLinks, links } from "./nav-links-data"; //title was also there as the first component
import {clearAuth} from "../../../actions/auth";
import {clearAuthToken} from "../../../local-storage";
import { connect } from "react-redux";

export function NavigationBar(props) {
  // let displayLinks = landingLinks;
  // const linkElements = displayLinks.map((link, index) => {
  //   return (
  //     <li key={index}>
  //       <Link to={link.href}>
  //         {link.text}
  //       </Link>

  //     </li>
  //   );
  // });

  let displayLinks = props.loggedIn ? links: landingLinks;
  //  let displayLinks = landingLinks;
  const linkElements = displayLinks.map((link, index) => {
    return (
      <li key={index}>
        <Link to={link.href}>
          {link.text}
        </Link>

      </li>
    );
  })


  // let displayLink = links;
  // const displayElements = displayLink.map((link, index) => {
  //   console.log(props.loggedIn)
             
  //         if(props.loggedIn) {

  //       return (
  //         <li key={index}>
  //           <Link to={link.href}>
  //             {link.text}
  //           </Link>

  //         </li>
  //       )

  //       else {
  //           {linkElements}
  //       }
      
  //   }
  // })
  

  



  
  // if(props.loggedIn) {
  //   {displayElements}
  // }

 
  
      
  function logOut() {
        props.dispatch(clearAuth());
        clearAuthToken();
    }
  let logOutButton;
        if (props.loggedIn) {
          console.log(props.loggedIn);
            logOutButton = (
                <button className="logout" onClick={() => logOut()}>Log out</button>
            );
        }
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
        <ul className="nav-bar-ul">
          {linkElements}
          {logOutButton}
        </ul>

      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavigationBar);
