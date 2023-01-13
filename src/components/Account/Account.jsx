import jwt_decode from 'jwt-decode';
import AccountReceiptsList from '../AccountReceiptsList/AccountReceiptsList';
import './Account.css';
import AccountSettings from '../AccountSettings/AccountSettings';
import React from "react";

const Account = () => {
    const username = jwt_decode(localStorage.getItem('jwt-token')).sub;

    return (
        <div>
            <div className="hello_wrapper">
                <p>Hello {username}!</p>
            </div>
            <AccountSettings />
            <p className="table_title">Your receipts</p>
            <AccountReceiptsList />
        </div>
    );
};

export default Account;
