import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { getRoles, useAuth } from '../../../functions/authUtils';

const HeaderMenu = () => {
    const roles = getRoles();
    const isLogged = useAuth();

    return (
        <header className="header">
            <NavLink className="main_page_link nav_item nav__link" to="/">
                MyRestaurant
            </NavLink>

            <ul className="nav">
                <li className="nav_item">
                    <NavLink className="nav__link" to="/menu">
                        Menu
                    </NavLink>
                </li>

                {roles.ROLE_USER && (
                    <li className="nav_item">
                        <NavLink className="nav__link" to="/cart">
                            Cart
                        </NavLink>
                    </li>
                )}

                {roles.ROLE_ADMIN && (
                    <li className="nav_item">
                        <NavLink className="nav__link" to="/users">
                            Users
                        </NavLink>
                    </li>
                )}

                {roles.ROLE_MANAGER && (
                    <li className="nav_item">
                        <NavLink className="nav__link" to="/orders">
                            Orders
                        </NavLink>
                    </li>
                )}

                <li className="nav_item">
                    <NavLink className="nav__link" to="/account">
                        Account
                    </NavLink>
                </li>

                {!isLogged && (
                    <li className="nav_item">
                        <NavLink className="nav__link" to="/login">
                            Login
                        </NavLink>
                    </li>
                )}
            </ul>
        </header>
    );
};

export default HeaderMenu;
