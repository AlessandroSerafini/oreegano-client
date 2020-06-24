import {PASSWORD_RESET_TYPES, PasswordResetAction} from "./passwordResetTypes";
import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    isComplete: false,
};

export interface PasswordResetState {
    errorMessage: string | null;
    pending: boolean;
    isComplete: boolean;
}

export default (
    state: PasswordResetState = INITIAL_STATE,
    action: PasswordResetAction | SignoutAction,
): PasswordResetState => {
    switch (action.type) {
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_PENDING:
            return {...state, pending: true};
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                isComplete: true,
            };
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
                isComplete: false,
            };
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                isComplete: false,
            };
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                isComplete: false,
            };
        default:
            return state;
    }
};
