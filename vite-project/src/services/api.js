import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BACKEND ?? 'https://todo-list-react-magu.onrender.com/',
});
