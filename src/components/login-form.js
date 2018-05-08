import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import "./login-form.css";
import {required, nonEmpty} from '../validators';

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
                            {props.error_message}

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
                        <div className="demo-login">
                            <h1 className="try">Try it out!</h1>
                            <h1>log in with username "demo" and password "demoaccount"</h1>
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
