import React from "react";
import { connect } from "react-redux";

import Stories from "./stories";
import "../reusable-components/float-grid.css";

import "./user-stories.css";

export function UserStories(props) {
	return (
			<div className="user-stories">
			<h2 className="stories-title">Stories which Inspire...</h2>
			<Stories />
		</div>
	);
}








export default connect()(UserStories);