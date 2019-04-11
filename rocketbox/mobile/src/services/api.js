import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketbox-oministack-backend.herokuapp.com',
});

export default api;