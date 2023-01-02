import React from 'react';
import './Input.css';

const Input = (props) => {
    const { value, onChange } = props;

    return (
        <div className="mandatory_field">
            <input
                {...props}
                value={value}
                onChange={onChange}
                className="ls-form__input"
            />
        </div>
    );
};

export default Input;
