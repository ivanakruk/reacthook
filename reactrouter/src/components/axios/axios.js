import axios from "axios";

export const instance  = axios.create({
    baseURL: 'https://back-sandbox.herokuapp.com/api'
}); 