import React from 'react';
import HeaderMenu from './HeaderMenu';
import { Outlet } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <>
            <HeaderMenu />
            <Outlet />
        </>
    );
};

export default Header;
