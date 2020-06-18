import AsyncStorage from '@react-native-community/async-storage';
import {
  FIREBASE_TOKEN,
  FIRST_APP_LAUNCH_KEY,
  USER_DATA,
} from '../data/StorageConstants';
import {Credentials} from '../api/phomeApi';

export async function isFirstAppLaunch() {
  try {
    const isFirstOpen = await AsyncStorage.getItem(FIRST_APP_LAUNCH_KEY);
    if (isFirstOpen) {
      return false;
    }
    await AsyncStorage.setItem(FIRST_APP_LAUNCH_KEY, 'true');
    return true;
  } catch (err) {
    console.log(`[ isFirstAppLaunch ] ${err}`);
    return false;
  }
}
