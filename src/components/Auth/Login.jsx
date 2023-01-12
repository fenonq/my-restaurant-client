import React, { useState } from 'react';
import { login } from '../../functions/userRequests';
import './Auth.css';
import { NavLink } from 'react-router-dom';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (localStorage.getItem('user')) {
    //         navigate('/menu');
    //     }
    // }, [navigate]);

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login({ username, password }).catch((error) =>
            setErrorMsg(error.response.data.error)
        );

        setUsername('');
        setPassword('');
        setErrorMsg('');
    };

    return (
        <div className="wrapper">
            <form method="post" className="ls-form">
                <h1 className="ls-form__header">Login</h1>
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
                    <NavLink className="click-reference" to="/signup">
                        Don't have an account? Sign Up!
                    </NavLink>
                </p>

                {errorMsg && (
                    <p className="ls-form__error-message">{errorMsg}</p>
                )}

                {/*<p th:if="${param.logout ne null}" style="font-size: .8rem; color: green; font-style: italic; margin: 0"*/}
                {/*   th:text="#{login.message.logout}">Logout</p>*/}
            </form>
        </div>
    );
};

export default Login;
