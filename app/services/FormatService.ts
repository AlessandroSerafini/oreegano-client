import AsyncStorage from '@react-native-community/async-storage';
import {FIRST_APP_LAUNCH_KEY, LOGIN_DATA,} from '../data/StorageConstants';
import {JwtResponse} from "../context/auth/authActions";

function twoDecimals(val: number): number {
    return (Math.round((val + Number.EPSILON) * 100) / 100).toFixed(2);
}

export function formatPrice(price: number): string {
    return `${twoDecimals(price)} €`;
}

export function formatDistance(distance: number): string {
    return `${twoDecimals(distance)} km`;
}
