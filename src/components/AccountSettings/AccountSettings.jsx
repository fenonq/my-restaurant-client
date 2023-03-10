import React from 'react';
import './AccountSettings.css';
import Button from '../ui/Button/Button';
import { NavLink } from 'react-router-dom';
import { getRoles } from '../../functions/authUtils';
import { logout } from '../../functions/authRequests';

const AccountSettings = () => {
    const roles = getRoles();
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
                {roles.ROLE_ADMIN && (
                    <>
                        <NavLink to="/dishes">Dish redactor</NavLink>
                        <NavLink to="/categories">Category redactor</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default AccountSettings;
