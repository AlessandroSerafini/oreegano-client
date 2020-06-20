import AsyncStorage from '@react-native-community/async-storage';
import {FIRST_APP_LAUNCH_KEY,} from '../data/StorageConstants';

export async function isFirstAppLaunch() {
  try {
    // await AsyncStorage.removeItem(FIRST_APP_LAUNCH_KEY);
    const isFirstOpen = await AsyncStorage.getItem(FIRST_APP_LAUNCH_KEY);
    if (isFirstOpen) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(`[ isFirstAppLaunch ] ${err}`);
    return false;
  }
}

export async function writeFirstLaunch() {
  await AsyncStorage.setItem(FIRST_APP_LAUNCH_KEY, "true");
}
