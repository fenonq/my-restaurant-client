import React from 'react';
import './Button.css';

const Button = (props) => {
    const { onClick, children } = props;
    return (
        <button
            {...props}
            className="form__button"
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
