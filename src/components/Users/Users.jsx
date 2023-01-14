import React from 'react';
import UsersList from '../UsersList/UsersList';
import './Users.css';

const Users = () => {
    return (
        <div>
            <p className="table_title">All users</p>
            <UsersList />
        </div>
    );
};

export default Users;
