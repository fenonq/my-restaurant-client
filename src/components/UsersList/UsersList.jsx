import React, { useEffect, useState } from 'react';
import './UsersList.css';
import { getAllUsers } from '../../functions/userRequests';
import UserItem from '../UserItem/UserItem';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [forceRender, setForceRender] = useState(0);

    useEffect(() => {
        getAllUsers().then((res) => setUsers(res.map((el) => el)));
        setIsLoading(false);
    }, [forceRender]);

    return (
        <div className="table_wrapper">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Username</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UserItem
                                user={user}
                                key={user.id}
                                forceObj={{ forceRender, setForceRender }}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UsersList;
