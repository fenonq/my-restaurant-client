import axios from 'axios';

export const getDishes = (page = 0, size = 4, sort = 'name') => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get(
            `http://localhost:8080/api/v1/dishes?page=${page}&size=${size}&sort=${sort}`,
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => response.data);
};

export const changeDishVisibility = (id) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/dishes/visibility/${id}`, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const createDish = (dishData) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    console.log(dishData);
    return axios
        .post('http://localhost:8080/api/v1/dishes', dishData, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const updateDish = (dishData) => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    console.log(dishData);
    return axios
        .put(`http://localhost:8080/api/v1/dishes/${dishData.id}`, dishData, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};
