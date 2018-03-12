import React from "react";
import { connect } from "react-redux"; 

import "./image-list.css";
import "./float-grid.css";

export function ImageList(props) { 
	return (
		<div className="image-list">
			<h2 className="image-title">Ideas for You!</h2>
			<div className="row">
			    <div className="col-4">
					<div className="pic-one"></div>
						<h4 className="theme">Sports</h4>
				
				</div>

		    	<div className="col-4">	
					<div className="pic-two"></div>
						<h4 className="theme">Events</h4>

					
				</div>

		    <div className="col-4">
			<div className="pic-three"></div>
			<h4 className="theme">Sports</h4>
			</div>
			</div>

			<div className="row">
		    <div className="col-4">
			<div className="pic-four"></div>
			<h4 className="theme">Sports</h4>
			</div>

	
		    <div className="col-4">
			<div className="pic-five"></div>
			<h4 className="theme">Sports</h4>
			</div>


		    <div className="col-4">
			<div className="pic-six"></div>
			<h4 className="theme">Sports</h4>
			</div>
			</div>
		</div>
	);
}