import {AuthAction, SIGNOUT_TYPES} from "./signoutTypes";
import {SIGNIN_TYPES, SigninAction} from "./signinTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
};

export interface SigninState {
    errorMessage: string | null;
    pending: boolean;
}

export default (
    state: SigninState = INITIAL_STATE,
    action: SigninAction | AuthAction,
): SigninState => {
    switch (action.type) {
        case SIGNIN_TYPES.SIGNIN_PENDING:
            return {...state, pending: true};
        case SIGNIN_TYPES.SIGNIN_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case SIGNIN_TYPES.SIGNIN_ADD_ERROR:
            return {...state, errorMessage: action.payload, pending: false};
        case SIGNIN_TYPES.SIGNIN_CLEAR_ERROR:
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
