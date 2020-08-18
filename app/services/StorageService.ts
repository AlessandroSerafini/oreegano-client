import AsyncStorage from '@react-native-community/async-storage';
import {FIRST_APP_LAUNCH_KEY, LOGIN_DATA,} from '../data/StorageConstants';
import {JwtResponse} from "../context/auth/authActions";

export async function isFirstAppLaunch() {
  try {
    const isFirstOpen = await AsyncStorage.getItem(FIRST_APP_LAUNCH_KEY);
    return !isFirstOpen;
  } catch (err) {
    console.log(`[ isFirstAppLaunch ] ${err}`);
    return false;
  }
}

export async function writeFirstLaunch() {
  await AsyncStorage.setItem(FIRST_APP_LAUNCH_KEY, "true");
}

export async function storeLoginData(loginData: JwtResponse) {
  await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(loginData));
}

export async function getLoginData() {
  return AsyncStorage.getItem(LOGIN_DATA);
}

export async function clearLoginData() {
  await AsyncStorage.removeItem(LOGIN_DATA);
}
