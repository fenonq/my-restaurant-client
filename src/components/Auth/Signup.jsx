import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../ui/Input/Input';
import { signup } from '../../functions/userRequests';
import './Auth.css';
import Button from '../ui/Button/Button';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

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

    const submitHandler = (event) => {
        event.preventDefault();
        signup({ firstName, lastName, username, password }).catch((error) => {
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
            <form method="post" className="ls-form">
                <h1 className="ls-form__header">Signup</h1>
                <Input
                    value={firstName}
                    onChange={firstNameChangeHandler}
                    placeholder="name"
                    type="text"
                />
                <Input
                    value={lastName}
                    onChange={lastNameChangeHandler}
                    placeholder="surname"
                    type="text"
                />
                <Input
                    value={username}
                    onChange={usernameChangeHandler}
                    placeholder="username"
                    type="text"
                />
                <Input
                    value={password}
                    onChange={passwordChangeHandler}
                    placeholder="password"
                    type="password"
                />

                <Button onClick={submitHandler}>Submit</Button>

                <p className="under_text">
                    <NavLink className="click-reference" to="/login">
                        Already have an account? Log In!
                    </NavLink>
                </p>

                {errorMsg && (
                    <p className="ls-form__error-message">{errorMsg}</p>
                )}

                {/*<p th:if="${param.error ne null}" style="font-size: .8rem; color: red; font-style: italic; margin: 0"*/}
                {/*   th:text="#{signup.message.error}">Error</p>*/}
            </form>
        </div>
    );
};

export default Signup;
