import {SignoutAction} from '../auth/authTypes';
import {JwtResponse} from './authActions';

export enum AUTH_TYPES {
    SIGNUP_PENDING = 'SIGNUP_PENDING',
    SIGNUP_COMPLETED = 'SIGNUP_COMPLETED',
    SIGNUP_ADD_ERROR = 'SIGNUP_ADD_ERROR',
    SIGNUP_CLEAR_ERROR = 'SIGNUP_CLEAR_ERROR',
    SIGNOUT = 'SIGNOUT',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface SignupPending {
    type: AUTH_TYPES.SIGNUP_PENDING;
}

interface SignupCompleted {
    type: AUTH_TYPES.SIGNUP_COMPLETED;
    payload: JwtResponse;
}

interface SignupAddError {
    type: AUTH_TYPES.SIGNUP_ADD_ERROR;
    payload: string;
}

interface SignupClearError {
    type: AUTH_TYPES.SIGNUP_CLEAR_ERROR;
}

interface Signout {
    type: AUTH_TYPES.SIGNOUT;
}

export type AuthAction =
    | SignupPending
    | SignupCompleted
    | SignupAddError
    | SignupClearError
    | Signout
