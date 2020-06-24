import {JwtResponse} from './passwordActions';
import {SignupAction} from "../auth/signupTypes";

export enum PASSWORD_RESET_TYPES {
    PASSWORD_RESET_PENDING = 'PASSWORD_RESET_PENDING',
    PASSWORD_RESET_COMPLETED = 'PASSWORD_RESET_COMPLETED',
    PASSWORD_RESET_ADD_ERROR = 'PASSWORD_RESET_ADD_ERROR',
    PASSWORD_RESET_CLEAR_ERROR = 'PASSWORD_RESET_CLEAR_ERROR',
    PASSWORD_RESET_RESET = 'PASSWORD_RESET_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface PasswordResetPending {
    type: PASSWORD_RESET_TYPES.PASSWORD_RESET_PENDING;
}

interface PasswordResetCompleted {
    type: PASSWORD_RESET_TYPES.PASSWORD_RESET_COMPLETED;
    payload: JwtResponse;
}

interface PasswordResetAddError {
    type: PASSWORD_RESET_TYPES.PASSWORD_RESET_ADD_ERROR;
    payload: string;
}

interface PasswordResetClearError {
    type: PASSWORD_RESET_TYPES.PASSWORD_RESET_CLEAR_ERROR;
}

interface PasswordResetReset {
    type: PASSWORD_RESET_TYPES.PASSWORD_RESET_RESET;
}

export type PasswordResetAction =
    | PasswordResetPending
    | PasswordResetCompleted
    | PasswordResetAddError
    | PasswordResetClearError
    | PasswordResetReset
    | SignupAction;
