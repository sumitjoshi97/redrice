import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import propTypes from 'prop-types';
import timezones from '../../data/timezones.js';
import map from 'lodash/map';
import classNames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {} });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.context.history.push('/')
                 }).
                catch((err) => { this.setState({ errors: err.response.data.errors }) }
                )
        }
        //axios.post('/api/users' , {user: this.state});
    }

    render() {
        const errors = this.state.errors;
        const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our Community</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    type="text"
                    name="username"
                    className="form-control"
                    onChange={this.handleChange}
                />

                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    onChange={this.handleChange}
                />

                <div className={classNames("form-group", { "has-error": errors.timezone })} >
                    <label className="control-label">Timezone</label>
                    <select
                        name="timezone"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.timezone}
                    >
                        <option value="" disabled>Choose your option</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}

                </div>


                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign up</button>
                </div>
            </form >
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

SignupForm.contextTypes= {
    router: React.PropTypes.object.isRequired
}
export default SignupForm;