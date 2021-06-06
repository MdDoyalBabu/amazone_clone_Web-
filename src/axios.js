import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The api (cloud function URL)
});

export default instance;