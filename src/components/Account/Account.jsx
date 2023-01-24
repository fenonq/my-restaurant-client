import jwt_decode from 'jwt-decode';
import AccountReceiptsList from '../AccountReceiptsList/AccountReceiptsList';
import './Account.css';
import AccountSettings from '../AccountSettings/AccountSettings';
import React from 'react';
import { getRoles } from '../../functions/authUtils';

const Account = () => {
    const username = jwt_decode(localStorage.getItem('jwt-token')).sub;
    const roles = getRoles();

    return (
        <div>
            <div className="hello_wrapper">
                <p>Hello {username}!</p>
            </div>
            <AccountSettings />
            {roles.ROLE_USER && (
                <>
                    <p className="table_title">Your receipts</p>
                    <AccountReceiptsList />
                </>
            )}
        </div>
    );
};

export default Account;
