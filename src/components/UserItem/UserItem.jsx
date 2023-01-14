import React from 'react';
import Button from '../ui/Button/Button';
import { banOrUnbanUser, changeUserRole } from '../../functions/userRequests';

const UserItem = ({ user, forceObj }) => {
    const { forceRender, setForceRender } = forceObj;

    const changeUserRoleHandler = () => {
        const roleId = 3 - user.roles[0].id;
        changeUserRole(user.id, roleId);
        setTimeout(() => {
            setForceRender(forceRender + 1);
        }, 50);
    };

    const banOrUnbanUserHandler = () => {
        banOrUnbanUser(user.id);
        setTimeout(() => {
            setForceRender(forceRender + 1);
        }, 50);
    };

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            {user.roles[0].name === 'ROLE_ADMIN' ? (
                <td>admin</td>
            ) : (
                <td>
                    <Button onClick={changeUserRoleHandler}>
                        {user.roles[0].name}
                    </Button>
                </td>
            )}
            <td>
                <Button onClick={banOrUnbanUserHandler}>
                    {user.active ? 'Ban' : 'Unban'}
                </Button>
            </td>
        </tr>
    );
};

export default UserItem;
