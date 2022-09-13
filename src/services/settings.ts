import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://79.143.31.216',
    headers: { "Content-Type": "multipart/form-data" },
})