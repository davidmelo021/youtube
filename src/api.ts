import axios from "axios";

const token = window.localStorage.getItem("token");

const api = axios.create({
    baseURL:'https://localhost:4000',
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token
    }
})

export default api;