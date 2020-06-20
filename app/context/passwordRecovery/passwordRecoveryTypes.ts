import {JwtResponse} from './passwordRecoveryActions';
import {SignupAction} from "../auth/signupTypes";

export enum PASSWORD_RECOVERY_TYPES {
    PASSWORD_RECOVERY_PENDING = 'PASSWORD_RECOVERY_PENDING',
    PASSWORD_RECOVERY_COMPLETED = 'PASSWORD_RECOVERY_COMPLETED',
    PASSWORD_RECOVERY_ADD_ERROR = 'PASSWORD_RECOVERY_ADD_ERROR',
    PASSWORD_RECOVERY_CLEAR_ERROR = 'PASSWORD_RECOVERY_CLEAR_ERROR',
    PASSWORD_RECOVERY_RESET = 'PASSWORD_RECOVERY_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface PasswordRecoveryPending {
    type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_PENDING;
}

interface PasswordRecoveryCompleted {
    type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_COMPLETED;
    payload: JwtResponse;
}

interface PasswordRecoveryAddError {
    type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_ADD_ERROR;
    payload: string;
}

interface PasswordRecoveryClearError {
    type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_CLEAR_ERROR;
}

interface PasswordRecoveryReset {
    type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_RESET;
}

export type PasswordRecoveryAction =
    | PasswordRecoveryPending
    | PasswordRecoveryCompleted
    | PasswordRecoveryAddError
    | PasswordRecoveryClearError
    | PasswordRecoveryReset
    | SignupAction;
