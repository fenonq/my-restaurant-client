import axios from 'axios';
import { API_DISHES } from '../utils/constants';
import {getToken} from "./authUtils";

export const getDishes = (page = 0, size = 4, sort = 'name') => {
    const token = getToken();
    return axios
        .get(`${API_DISHES}?page=${page}&size=${size}&sort=${sort}`, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const changeDishVisibility = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_DISHES}/visibility/${id}`,
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

export const createDish = (dishData) => {
    const token = getToken();
    return axios
        .post(API_DISHES, dishData, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const updateDish = (dishData) => {
    const token = getToken();
    return axios
        .put(`${API_DISHES}/${dishData.id}`, dishData, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};
