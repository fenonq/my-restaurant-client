import axios from "axios";

export const makeOrder = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .post(`http://localhost:8080/api/v1/receipts`, {}, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const getReceipts = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get(
            `http://localhost:8080/api/v1/receipts/user`,
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => response.data);
};
