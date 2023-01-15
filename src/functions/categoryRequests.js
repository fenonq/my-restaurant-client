import axios from 'axios';

export const getAllCategories = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get(`http://localhost:8080/api/v1/categories`, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const changeCategoryVisibility = (id) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(
            `http://localhost:8080/api/v1/categories/visibility/${id}`,
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

export const createCategory = (categoryName) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .post(
            'http://localhost:8080/api/v1/categories',
            { name: categoryName },
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

export const updateCategory = (id, categoryName) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .put(
            `http://localhost:8080/api/v1/categories/${id}`,
            {
                id: id,
                name: categoryName,
            },
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
