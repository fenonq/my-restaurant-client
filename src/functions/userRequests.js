import axios from 'axios';

export const login = (userData) => {
    return axios
        .post('http://localhost:8080/api/v1/authentication/login', userData)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem(
                    'jwt-token',
                    JSON.stringify(response.data.accessToken)
                );
            }
            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem('jwt-token');
};

export const signup = (userData) => {
    return axios
        .post('http://localhost:8080/api/v1/authentication/signup', userData)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem(
                    'jwt-token',
                    JSON.stringify(response.data.accessToken)
                );
            }
            return response.data;
        });
};

export const getUserCart = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get('http://localhost:8080/api/v1/users/cart', {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const addDishToCart = (id) => {
    const token = JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/users/cart/add/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const removeDishFromCart = (id) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/users/cart/remove/${id}`, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const getAllUsers = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get(
            `http://localhost:8080/api/v1/users`,
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => response.data);
};

export const changeUserRole = (userId, roleId) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/users/${userId}/change-role/${roleId}`, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const banOrUnbanUser = (id) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/users/ban/${id}`, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};
