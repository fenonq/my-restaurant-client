import React, { useState } from 'react';
import './Auth.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {login} from "../../functions/authRequests";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = () => {
        login({ username, password })
            .then(() => navigate('/'))
            .catch((error) => setErrorMsg(error.response.data.message));

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
                <h1 className="ls-form__header">Login</h1>
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
                    <NavLink className="click-reference" to="/signup">
                        Don't have an account? Sign Up!
                    </NavLink>
                </p>
                {errorMsg && (
                    <p className="ls-form__error-message">{errorMsg}</p>
                )}
            </form>
        </div>
    );
};

export default Login;
