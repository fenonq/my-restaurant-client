import { getRoles } from '../functions/authUtils';

const AccessRoute = ({ role, to, redirect }) => {
    const roles = getRoles();
    return roles[role] ? to : redirect;
};

export default AccessRoute;
