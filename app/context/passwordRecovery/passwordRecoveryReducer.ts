import {AUTH_TYPES} from "../auth/signupTypes";
import {PASSWORD_RECOVERY_TYPES, PasswordRecoveryAction} from "./passwordRecoveryTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    isComplete: false,
};

export interface ForgotPasswordState {
    errorMessage: string | null;
    pending: boolean;
    isComplete: boolean;
}

export default (
    state: ForgotPasswordState = INITIAL_STATE,
    action: PasswordRecoveryAction,
): ForgotPasswordState => {
    switch (action.type) {
        case PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_PENDING:
            return { ...state, pending: true };
        case PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                isComplete: true,
            };
        case PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
                isComplete: false,
            };
        case PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                isComplete: false,
            };
        case PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_RESET:
        case AUTH_TYPES.SIGNOUT:
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
