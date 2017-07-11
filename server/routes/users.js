import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash';

let router = express.Router();

function validateinput(data) {
    let errors = [];
    if(Validator.isNull(data.username)) {
        errors.username = 'This field is required';
    }

    if (Validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }
    if (Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if(!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }
    if (Validator.isNull(data.timezone)) {
        errors.timezone = 'This field is required';
    }
}

router.post('/', (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateinput(req, body)

    if (!isValid) {
        res.status()
    }

})

export default router;