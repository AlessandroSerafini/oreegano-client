import axios from 'axios';
import {environment} from '../environment/environment';
import {getLoginData} from "../services/StorageService";

let url;

if (__DEV__) {
    url = environment.DEV_BASE_URL;
} else {
    url = environment.PROD_BASE_URL;
}

const instance = axios.create({
    baseURL: url,
    responseType: 'json',
});

instance.defaults.params = instance.interceptors.request.use(
    async (config) => {
        config.headers = {
            apiKey: environment.API_KEY,
        };
        const loginData = await getLoginData();
        if(loginData) {
            const parsedLoginData = JSON.parse(loginData);
            if (parsedLoginData.id) {
                config.headers["Authorization"] = `Bearer ${parsedLoginData.id}`;
            }
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default instance;
