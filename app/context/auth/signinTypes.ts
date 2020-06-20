import {SignoutAction} from './SigninTypes';
import {JwtResponse} from './authActions';

export enum SIGNIN_TYPES {
    SIGNIN_PENDING = 'SIGNIN_PENDING',
    SIGNIN_COMPLETED = 'SIGNIN_COMPLETED',
    SIGNIN_ADD_ERROR = 'SIGNIN_ADD_ERROR',
    SIGNIN_CLEAR_ERROR = 'SIGNIN_CLEAR_ERROR',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface SigninPending {
    type: SIGNIN_TYPES.SIGNIN_PENDING;
}

interface SigninCompleted {
    type: SIGNIN_TYPES.SIGNIN_COMPLETED;
    payload: JwtResponse;
}

interface SigninAddError {
    type: SIGNIN_TYPES.SIGNIN_ADD_ERROR;
    payload: string;
}

interface SigninClearError {
    type: SIGNIN_TYPES.SIGNIN_CLEAR_ERROR;
}

export type SigninAction =
    | SigninPending
    | SigninCompleted
    | SigninAddError
    | SigninClearError
