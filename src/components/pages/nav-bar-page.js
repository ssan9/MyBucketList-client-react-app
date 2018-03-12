import React from 'react';
import ReactDOM from 'react-dom';

import "./nav-bar-page.css";

export default function NavigationBar(props) {
    return (
        <nav className="navigation-bar">
        	<h1 className="current" id="app-name"><a href="/">MyBucketList</a></h1>
        	<input className="menu-btn" type="checkbox" id="menu-btn" />
    		<label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        		<div className="nav-bar">
		            	<ul>
		                	<li><a href="signup">Signup</a></li>
		                	<li><a href="login">Login</a></li>
			                <li><a href="create">Create Your Goals</a></li>
			                <li><a href="goals">View Your Goals</a></li>
			               	<li><a href="logout">Logout</a></li>
						</ul>
					</div>	
        </nav>
    )
}