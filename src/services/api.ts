import axios from 'axios';

const api = axios.create({
    baseURL: 'http://omdbapi.com'
});
export default api;