import {SIGNUP_TYPES, SignupAction} from './signupTypes';
import {AuthAction, SIGNOUT_TYPES} from "./signoutTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
};

export interface SignupState {
    errorMessage: string | null;
    pending: boolean;
}

export default (
    state: SignupState = INITIAL_STATE,
    action: SignupAction | AuthAction,
): SignupState => {
    switch (action.type) {
        case SIGNUP_TYPES.SIGNUP_PENDING:
            return {...state, pending: true};
        case SIGNUP_TYPES.SIGNUP_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case SIGNUP_TYPES.SIGNUP_ADD_ERROR:
            return {...state, errorMessage: action.payload, pending: false};
        case SIGNUP_TYPES.SIGNUP_CLEAR_ERROR:
            return {...state, errorMessage: null, pending: false};
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        default:
            return state;
    }
};
