import axios from 'axios';
import { API_USERS } from '../utils/constants';
import {getToken} from "./authUtils";

export const getUserCart = () => {
    const token = getToken();
    return axios
        .get(`${API_USERS}/cart`, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const addDishToCart = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_USERS}/cart/add/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            return response.data;
        });
};

export const removeDishFromCart = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_USERS}/cart/remove/${id}`,
            {},
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => {
            return response.data;
        });
};

export const getAllUsers = () => {
    const token = getToken();
    return axios
        .get(API_USERS, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const changeUserRole = (userId, roleId) => {
    const token = getToken();
    return axios
        .patch(
            `${API_USERS}/${userId}/change-role/${roleId}`,
            {},
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => {
            return response.data;
        });
};

export const banOrUnbanUser = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_USERS}/ban/${id}`,
            {},
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => {
            return response.data;
        });
};
