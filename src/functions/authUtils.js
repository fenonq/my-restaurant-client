import jwt_decode from 'jwt-decode';
import { ROLE_ADMIN, ROLE_MANAGER, ROLE_USER } from '../utils/constants';

export const getRoles = () => {
    if (localStorage.getItem('jwt-token')) {
        const jwt = jwt_decode(localStorage.getItem('jwt-token'));
        return {
            ROLE_USER: jwt.roles[0] === ROLE_USER,
            ROLE_MANAGER: jwt.roles[0] === ROLE_MANAGER,
            ROLE_ADMIN: jwt.roles[0] === ROLE_ADMIN,
        };
    }

    return null;
};

export const getToken = () => {
    return 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
};

export const useAuth = () => {
    return !!localStorage.getItem('jwt-token');
};
