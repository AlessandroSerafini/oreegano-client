import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA} from '../data/StorageConstants';
import {environment} from '../environment/environment';

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
    const storageResult = await AsyncStorage.getItem(USER_DATA);
    if (storageResult != null) {
      config.params =
        config.method === 'post' ? config.data.params : config.params;
    }
    config.headers = {
      apiKey: environment.API_KEY,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
