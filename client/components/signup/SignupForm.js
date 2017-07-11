import React, { Component } from 'react';
import timezones from '../../data/timezones.js';
import map from 'lodash/map';
import axios from 'axios';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        //axios.post('/api/users' , {user: this.state});
    }

    render() {
        const options = map(timezones,(val, key) => 
           <option key={val} value={val}>{key}</option>
        );

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our Community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
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
                </div>


                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign up</button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
} 


export default SignupForm;