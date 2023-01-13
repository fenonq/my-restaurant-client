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

export const getUserReceipts = () => {
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

export const getAllReceipts = () => {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .get(
            `http://localhost:8080/api/v1/receipts`,
            {
                headers: {
                    Authorization: token,
                },
            }
        )
        .then((response) => response.data);
};

export const changeReceiptStatus = (id) => {
    const token = JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/receipts/next-status/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const cancelOrRenewReceipt = (id) => {
    const token = JSON.parse(localStorage.getItem('jwt-token'));
    return axios
        .patch(`http://localhost:8080/api/v1/receipts/cancel/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.data;
        });
};
