import axios from 'axios';

export const API_URL = 'https://shift-intensive.ru/api';

const api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api;