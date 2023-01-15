import React from 'react';
import './AccountSettings.css';
import { logout } from '../../functions/userRequests';
import Button from '../ui/Button/Button';
import { NavLink } from 'react-router-dom';

const AccountSettings = () => {
    const logoutHandler = () => {
        logout();
    };

    return (
        <div>
            <div className="settings_links">
                <div className="a_logout-button">
                    <NavLink to="/login">
                        <Button onClick={logoutHandler}>Logout</Button>
                    </NavLink>
                </div>
                <NavLink to="/dishes">Dish redactor</NavLink>
                <NavLink to="/categories">Category redactor</NavLink>
            </div>
        </div>
    );
};

export default AccountSettings;

// {/*<a th:href="@{/dishes}" className="a_changepass" th:text="#{account.settings.redactor.dish}"*/}
// {/*   th:style="${currentUser.roles.iterator().next().toString() != 'ADMIN'} ? 'display: none'">*/}
// {/*    Dish redactor*/}
// {/*</a>*/}
// {/*<a th:href="@{/categories}" className="a_changepass" th:text="#{account.settings.redactor.category}"*/}
// {/*   th:style="${currentUser.roles.iterator().next().toString() != 'ADMIN'} ? 'display: none'">*/}
// {/*    Category redactor*/}
// {/*</a>*/}
// {/*<form th:action="@{/logout}" method="post">*/}
// {/*    <input type="submit" th:value="#{account.settings.signOut}"/>*/}
// {/*</form>*/}
