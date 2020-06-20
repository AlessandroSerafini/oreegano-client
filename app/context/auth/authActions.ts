import {Dispatch} from 'redux';
import {AxiosResponse} from 'axios';
import oreeganoApi from '../../api/oreeganoApi';
import {SIGNUP_TYPES, SignupAction} from './signupTypes';
import {SIGNIN_TYPES, SigninAction} from "./signinTypes";
import {SIGNOUT_TYPES, SignoutAction} from "./signoutTypes";

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

export interface Credentials {
    email: string;
    password: string;
}

export interface JwtResponse {
    id: string;
    user: Omit<User, 'password'>;
}

export const signUp = (
    data: Omit<User,
        'id' | 'pswRecToken' | 'pswRecTokenExpireDate' | 'pswRecExpireDate'>,
) => async (dispatch: Dispatch<SignupAction>) => {
    try {
        dispatch({type: SIGNUP_TYPES.SIGNUP_PENDING});
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
            type: SIGNUP_TYPES.SIGNUP_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: SIGNUP_TYPES.SIGNUP_ADD_ERROR,
            payload: error.message,
        });
    }
};
export const signIn = (
    data: Credentials,
) => async (dispatch: Dispatch<SigninAction>) => {
    try {
        dispatch({type: SIGNIN_TYPES.SIGNIN_PENDING});
        const {email, password} = data;
        const response: AxiosResponse<any> = await oreeganoApi.post(
            '/users/signin',
            {
                email,
                password,
            },
        );

        dispatch({
            type: SIGNIN_TYPES.SIGNIN_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: SIGNIN_TYPES.SIGNIN_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const signOut = () => async (dispatch: Dispatch<SignoutAction>) => {
    try {
        dispatch({type: SIGNOUT_TYPES.SIGNOUT_PENDING});

        dispatch({
            type: SIGNOUT_TYPES.SIGNOUT_COMPLETED,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: SIGNOUT_TYPES.SIGNOUT_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearSignupErrorMessage = () => (dispatch: Dispatch<SignupAction>) => {
    dispatch({type: SIGNUP_TYPES.SIGNUP_CLEAR_ERROR});
};

export const clearSigninErrorMessage = () => (dispatch: Dispatch<SigninAction>) => {
    dispatch({type: SIGNIN_TYPES.SIGNIN_CLEAR_ERROR});
};
