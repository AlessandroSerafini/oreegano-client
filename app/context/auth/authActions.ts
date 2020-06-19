import {Dispatch} from 'redux';
import {AxiosResponse} from 'axios';
import oreeganoApi from '../../api/oreeganoApi';
import {AUTH_TYPES, AuthAction} from './authTypes';

export enum UserRoles {
    CUSTOMER = 1,
    STORE = 2,
}

export interface User {
    id: number;
    type: UserRoles;
    name: string;
    email: string;
    password: string;
    pswRecToken?: string;
    pswRecTokenExpireDate?: Date;
    pswRecExpireDate?: Date;
}

export interface JwtResponse {
    id: string;
    user: Omit<User, 'password'>;
}

export const signUp = (
    data: Omit<User,
        'id' | 'pswRecToken' | 'pswRecTokenExpireDate' | 'pswRecExpireDate'>,
) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        const {type, name, email, password} = data;
        const response: AxiosResponse<any> = await oreeganoApi.post(
            '/users/signup',
            {
                type,
                name,
                email,
                password,
            },
        );

        dispatch({
            type: AUTH_TYPES.SIGNUP_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: AUTH_TYPES.SIGNUP_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const signOut = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({
            type: AUTH_TYPES.SIGNOUT,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: AUTH_TYPES.SIGNUP_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearErrorMessage = () => (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AUTH_TYPES.SIGNUP_CLEAR_ERROR});
};
