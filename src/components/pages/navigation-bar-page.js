import React from 'react';

import './navigation-bar-page.css';
import { Link, Redirect } from "react-router-dom";

export default function NavigationBar(props) {
	const landingLinks = props.landingLinks.map((landingLink, index) => {
		<li key = {index}>
			<a href={landingLink.href}>
				{landingLink.text}
			</a>
		</li>		
	});

	const links = props.links.map((link, index) => {
		<li key = {index}>
			<a href={link.href}>
				{link.text}
			</a>
		</li>	
	});

		return (	
			<nav className="navigation-bar">
					<h1>{props.title}</h1>
					<div className="navigation-bar-landing">
						<ul>
							{landingLinks}
						</ul>
					</div>
					<div className="navigation-bar-nav">
						<ul>
							{links}
						</ul>	
					</div>	
			</nav>			
		);
	
}







