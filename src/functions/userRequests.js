import axios from 'axios';

export const sendLoginRequestHandler = async (userData) => {
    console.log(userData);
    const rawResponse = await fetch(
        'http://localhost:8080/api/v1/users/login',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }
    );
    return await rawResponse.json();
};

export const login = (userData) => {
    return axios
        .post('http://localhost:8080/api/v1/users/login', userData)
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
        .post('http://localhost:8080/api/v1/users/signup', userData)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
};
