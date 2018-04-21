import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
// import Input from './input';
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
    export function LoginForm(props) {
  const { handleSubmit, pristine, submitting } = props
        return (
            <div className="form-login">
                <div className="demo-login">
                    <h2>Demo login:</h2>
                    <h3> Username: uiop</h3>
                    <h3> Password: qwertyuiop</h3>
                </div>
            <form onSubmit={handleSubmit} 
                className="login-form">

                <div className="fields">
                <Field
                    component="input"
                    type="text"
                    name="username"
                    className="username user-login"
                    placeholder="Username"
                    validate={[required, nonEmpty]}
                />
                </div>
                <div className="fields">

                <Field
                    component="input"
                    type="password"
                    className="credentials password user-login"
                    name="password"
                    placeholder="Password"
                    validate={[required, nonEmpty]}
                />
                </div>
                <button className="login-button"  disabled={pristine || submitting}>
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
