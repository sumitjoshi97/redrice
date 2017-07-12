import React from 'react';
import classNames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
    return (
        <div className={classNames("form-group", { "has-error": error })} >
            <label className="control-label">{label}</label>
            <input
                type={type}
                name={field}
                value={value}
                className="form-control"
                onChange={onchange}
            />
            {error && <span className="help-block">{error}</span>}
        </div>
    );
}

export default TextFieldGroup;