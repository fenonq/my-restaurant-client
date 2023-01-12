import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const HeaderMenu = () => {
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

                <li className="nav_item">
                    <NavLink className="nav__link" to="/cart">
                        Cart
                    </NavLink>
                </li>

                <li className="nav_item">
                    <NavLink className="nav__link" to="/account">
                        Account
                    </NavLink>
                </li>

                <li className="nav_item">
                    <NavLink className="nav__link" to="/login">
                        Login
                    </NavLink>
                </li>

                {/*<li className="nav_item" th:style="${currentUser} ?*/}
                {/*                      (${currentUser.roles.iterator().next().toString() != 'CUSTOMER'} ? 'display: none') :*/}
                {/*                       'display: none'">*/}
                {/*    <a className="nav__link" th:href="@{/cart/user}" th:text="#{Header.cart}">Cart</a>*/}
                {/*</li>*/}
                {/*<li className="nav_item" th:style="${currentUser} ?*/}
                {/*                      (${currentUser.roles.iterator().next().toString() != 'MANAGER'} ? 'display: none') :*/}
                {/*                       'display: none'">*/}
                {/*    <a className="nav__link" th:href="@{/receipts}" th:text="#{Header.receipts}">Receipts</a>*/}
                {/*</li>*/}
                {/*<li className="nav_item" th:style="${currentUser} ?*/}
                {/*                      (${currentUser.roles.iterator().next().toString() != 'ADMIN'} ? 'display: none') :*/}
                {/*                       'display: none'">*/}
                {/*    <a className="nav__link" th:href="@{/users}" th:text="#{Header.users}">Users</a>*/}
                {/*</li>*/}
                {/*<li className="nav_item" th:style="${currentUser} ?: 'display: none'">*/}
                {/*    <a className="nav__link" th:href="@{/account}" th:text="#{Header.account}">Account</a>*/}
                {/*</li>*/}
                {/*<li className="nav_item" th:style="${currentUser} ? 'display: none'">*/}
                {/*    <a className="nav__link" th:href="@{/login}" th:text="#{Header.login}">Login</a>*/}
                {/*</li>*/}
            </ul>
        </header>
    );
};

export default HeaderMenu;
