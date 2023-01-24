import axios from 'axios';
import { API_RECEIPTS } from '../utils/constants';
import {getToken} from "./authUtils";

export const makeOrder = () => {
    const token = getToken();
    return axios
        .post(
            API_RECEIPTS,
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

export const getUserReceipts = () => {
    const token = getToken();
    return axios
        .get(`${API_RECEIPTS}/user`, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const getAllReceipts = () => {
    const token = getToken();
    return axios
        .get(API_RECEIPTS, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => response.data);
};

export const changeReceiptStatus = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_RECEIPTS}/next-status/${id}`,
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

export const cancelOrRenewReceipt = (id) => {
    const token = getToken();
    return axios
        .patch(
            `${API_RECEIPTS}/cancel/${id}`,
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
