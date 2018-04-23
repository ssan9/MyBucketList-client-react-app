import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
// import Input from './input';
// import submit from './login-validator';

import "./login-form.css";

// import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

    // onSubmit(values) {
    //     console.log("hi");
    //     return this.props.dispatch(login(values.username, values.password));
    // }

    // render() {
    //     let error;
    //     if (this.props.error) {
    //         error = (
    //             <div className="form-error" aria-live="polite">
    //                 {this.props.error}
    //             </div>
    //         );
    //     }

    // disabled={this.props.pristine || this.props.submitting} where to add it?
    const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
  
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className="warning-sign">{error}</span>}
  </div>
);
    export function LoginForm(props) {
  const { handleSubmit, submitting } = props
        return (
            <div className="form-login">
                <div className="demo-login">
                    <h1>To try it out, log in with username "demo" and password "demoaccount"</h1>
                </div>
            <form onSubmit={handleSubmit} 
                className="login-form">

                <div className="fields">
                <Field
                    component={renderField}
                    type="text"
                    name="username"
                    className="username user-login"
                    placeholder="Username"
                    value="uiop"
                    validate={[required, nonEmpty]}
                />
                </div>
                <div className="fields">

                <Field
                    component={renderField}
                    type="password"
                    className="credentials password user-login"
                    name="password"
                    placeholder="Password"
                    value="qwertyuiop"
                    validate={[required, nonEmpty]}
                />
                </div>
                <button className="login-button"  disabled={submitting}>
                    Log in
                </button>
            
            </form>
            
        </div>
        );
    }



export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
