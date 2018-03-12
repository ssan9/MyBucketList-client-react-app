import React from "react";
import { connect } from "react-redux";


// import { Link, Redirect } from "react-router-dom";

import "./create-item-page.css";

export function CreateItemPage(props) {
  return (
    <div className="create-item">
    		<h2 className="title">Create Your Goal!</h2>
    		<form className="goal-creation-form">
    		<div className="fields">
    		<input
    			type="text"
    			name="description"
    			id="description"
    			className="create-goal"
    			aria-labelledby="Describe Your Goal!"
    			placeholder="Description"
    			required
    		/>
    		<input
    			type="text"
    			name="category"
    			id="category"
    			className="create-goal"
    			aria-labelledby="Choose a category"
    			placeholder="Category"
    			required
    		/>
    		<input
    			type="date"
    			name="due-date"
    			id="due-date"
    			className="create-goal"	
    			aria-labelledby="Due Date"
    			placeholder="Due Date"
    			required
    		/>
    		<div className="form-submit">
    		<button type="submit" className="cancel-button button" id="cancel">Cancel</button>
            <button type="submit" className="save-button button" id="save">Save</button>
            </div>
            </div>
            </form>	
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateItemPage);
