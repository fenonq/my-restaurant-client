import axios from 'axios';
import {API_CATEGORIES} from "../utils/constants";
import {getToken} from "./authUtils";

export const getAllCategories = () => {
    const token = getToken();
    return axios
        .get(API_CATEGORIES, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const changeCategoryVisibility = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_CATEGORIES}/visibility/${id}`,
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

export const createCategory = (categoryData) => {
    const token = getToken();
    return axios
        .post(API_CATEGORIES, categoryData, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const updateCategory = (categoryData) => {
    const token = getToken();
    return axios
        .put(
            `${API_CATEGORIES}/${categoryData.id}`,
            categoryData,
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
