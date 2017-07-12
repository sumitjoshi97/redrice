import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';

class SignupPage extends Component {
    //  state = {  }
    render() {
        const userSignupRequest = this.props.userSignupRequest;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);