import React from 'react'
import { Field, reduxForm, focus } from 'redux-form'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom"; //Redirect was also there with Link after a comma

// import Input from "../../input";
import { required, nonEmpty, length, isTrimmed } from "../../../validators";
import './signup-form.css';
const passwordLength = length({ min: 10, max: 72 });

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
 
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className="warning-sign">{error}</span>) || (warning && <span className="warning-sign"><i className="fa fa-exclamation-circle" aria-hidden="true"></i>
{warning}</span>))}
    </div>
  
)
export function SignupForm(props) {
  const { handleSubmit, submitting } = props
  return (
  	<div>
  	<div className="demo-login">
        <h1>To try it out, <Link to="/login" className="login-link">log in </Link>with username "demo" and password "demoaccount"</h1>
     </div>
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
	        	component={renderField}
	        	type="text"
	        	id="username"
	        	className="register"
	        	autoComplete="off"
	        	aria-labelledby="Username"
	        	placeholder="Username"
	        	validate={[required, nonEmpty, isTrimmed]}

	        
	        />
	      </div>
	      <div className="fields">
	        <Field 
	        	name="email" 
	        	component={renderField}
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
	        	component={renderField}
	        	type="password"
	        	id="password"
	        	className="register auth"
	        	autoComplete="off"
	        	aria-labelledby="Password"
	        	placeholder="Password"
	        	validate={[required, passwordLength, isTrimmed]}

	        />
	      </div>
	      <br />
	      <br />
	      <br />
	      <br />
	      <br />

	     <h4 className="terms">By Signing up you agree to the Terms and Conditions</h4>
	    <br />
	      <button type="submit" className="create-account"  disabled={submitting}>
	      	      	CREATE ACCOUNT
	      </button>
	    </form>
   	</div>
  )
}

export default reduxForm({
  form: "signup",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("signup", Object.keys(errors)[0]))
})(SignupForm);

// SignupForm = reduxForm({
//   // a unique name for the form
//   form: 'signup'
// })(SignupForm)

// export default SignupForm

