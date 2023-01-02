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
