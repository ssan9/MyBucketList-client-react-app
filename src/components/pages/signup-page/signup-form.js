import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignupForm = props => {
  const { handleSubmit } = props
  return (
  	<div>
	    <form onSubmit={handleSubmit} className="register-form">
	    <div className="top-row">
	      <div className="fields">
	        <Field 
	        	name="firstName" 
	        	component="input" 
	        	type="text"
	        	id="firstName"
	        	className="name register"
	        	autoComplete="off"
	        	aria-labelledby="First Name"
	        	placeholder="First Name"
	        	required
	         />
	      </div>
	      <div className="fields">
	        <Field 
	        	name="lastName" 
	        	component="input" 
	        	type="text"
	        	id="lastName"
	        	className="name register"
	        	autoComplete="off"
	        	aria-labelledby="Last Name"
	        	placeholder="Last Name"
	        	required 
	        />
	      </div>
	      </div>
	      <div className="fields">
	        <Field 
	        	name="username" 
	        	component="input" 
	        	type="text"
	        	id="username"
	        	className="register"
	        	autoComplete="off"
	        	aria-labelledby="Username"
	        	placeholder="Username"
	        	required 
	        />
	      </div>
	      <div className="fields">
	        <Field 
	        	name="email" 
	        	component="input" 
	        	type="email"
	        	id="email" 
	        	className="register auth"
	        	autoComplete="off"
	        	aria-labelledby="Email"
	        	placeholder="Email Address"
	        	required
	        />
	      </div>
	      <div className="fields">
	        <Field 
	        	name="password" 
	        	component="input" 
	        	type="text"
	        	id="password"
	        	className="register auth"
	        	autoComplete="off"
	        	aria-labelledby="Password"
	        	placeholder="Password"
	        	required 
	        />
	      </div>

	     <h4 className="terms">By Signing up you agree to the Terms and Conditions</h4>

	      <button type="submit" className="create-account">
	      	CREATE ACCOUNT
	      </button>
	    </form>
   	</div>
  )
}

SignupForm = reduxForm({
  // a unique name for the form
  form: 'signup'
})(SignupForm)

export default SignupForm

