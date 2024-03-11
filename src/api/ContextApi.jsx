import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL + '/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;