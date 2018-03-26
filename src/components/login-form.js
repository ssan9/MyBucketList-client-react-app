import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import "./login-form.css";
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log("hi");
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="form-login">
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <div className="fields">
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    validate={[required, nonEmpty]}
                />
                
                <Field
                    component={Input}
                    type="password"
                    className="credentials"
                    name="password"
                    id="password"
                    placeholder="Password"
                    validate={[required, nonEmpty]}
                />

                <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            
                </div>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
