import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../../functions/userRequests';
import './Auth.css';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = () => {
        signup({ firstName, lastName, username, password })
            .then(() => navigate('/menu'))
            .catch((error) => {
                let message = '';
                for (const data of error.response.data) {
                    message += data.message + '\t';
                }
                return setErrorMsg(message);
            });

        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setErrorMsg('');
    };

    return (
        <div className="wrapper">
            <form
                onSubmit={handleSubmit(() => submitHandler())}
                className="ls-form"
            >
                <h1 className="ls-form__header">Signup</h1>
                <input
                    {...register('firstName', { required: true })}
                    placeholder="firstname"
                    className="ls-form__input"
                    onChange={firstNameChangeHandler}
                    value={firstName}
                    autoComplete="off"
                />
                <input
                    {...register('lastName', { required: true })}
                    placeholder="lastname"
                    className="ls-form__input"
                    onChange={lastNameChangeHandler}
                    value={lastName}
                    autoComplete="off"
                />
                <input
                    {...register('username', { required: true })}
                    placeholder="username"
                    className="ls-form__input"
                    onChange={usernameChangeHandler}
                    value={username}
                    autoComplete="off"
                />
                <input
                    {...register('password', { required: true })}
                    placeholder="password"
                    className="ls-form__input"
                    onChange={passwordChangeHandler}
                    value={password}
                    autoComplete="off"
                    type="password"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="submit__button"
                />
                <p className="under_text">
                    <NavLink className="click-reference" to="/login">
                        Already have an account? Log In!
                    </NavLink>
                </p>
                {errorMsg && (
                    <p className="ls-form__error-message">{errorMsg}</p>
                )}
            </form>
        </div>
    );
};

export default Signup;
