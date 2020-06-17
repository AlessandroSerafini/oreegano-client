import {SignoutAction} from "../auth/authTypes";
import {User} from "../../models/User";

export enum SIGNUP_TYPES {
    SIGNUP_PENDING = "SIGNUP_PENDING",
    SIGNUP_COMPLETED = "SIGNUP_COMPLETED",
    SIGNUP_ADD_ERROR = "SIGNUP_ADD_ERROR",
    SIGNUP_CLEAR_ERROR = "SIGNUP_CLEAR_ERROR",
}

// --------------------------- ACTION INTERFACES ---------------------------

interface SignupPending {
    type: SIGNUP_TYPES.SIGNUP_PENDING;
}

interface SignupCompleted {
    type: SIGNUP_TYPES.SIGNUP_COMPLETED;
    payload: User;
}

interface SignupAddError {
    type: SIGNUP_TYPES.SIGNUP_ADD_ERROR;
    payload: string;
}

interface SignupClearError {
    type: SIGNUP_TYPES.SIGNUP_CLEAR_ERROR;
}

interface SignupClearError {
    type: SIGNUP_TYPES.SIGNUP_CLEAR_ERROR;
}

export type SignupAction =
    | SignupPending
    | SignupCompleted
    | SignupAddError
    | SignupClearError
    /*| SignoutAction*/;
