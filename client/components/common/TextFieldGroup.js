import React from 'react';
import classNames from 'classnames';

const TextFieldGroup = ({ name, value, label, error, type, onChange }) => {
    return (
        <div className={classNames("form-group", { "has-error": error })} >
            <label className="control-label">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                className="form-control"
                onChange={onChange}
            />
            {error && <span className="help-block">{error}</span>}
        </div>
    );
}

export default TextFieldGroup;