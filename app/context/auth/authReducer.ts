import {SIGNUP_TYPES, SignupAction} from './signupTypes';
import {JwtResponse} from "./authActions";
import {AuthAction, SIGNOUT_TYPES} from "./signoutTypes";
import {SIGNIN_TYPES, SigninAction} from "./signinTypes";
import {PASSWORD_RESET_TYPES} from "../passwordRecovery/passwordResetTypes";

const INITIAL_STATE = {
    loginData: null,
};

export interface AuthState {
    loginData: JwtResponse | null;
}

export default (
    state: AuthState = INITIAL_STATE,
    action: SignupAction | SigninAction | AuthAction,
): AuthState => {
    switch (action.type) {
        case SIGNUP_TYPES.SIGNUP_COMPLETED:
        case SIGNIN_TYPES.SIGNIN_COMPLETED:
        case PASSWORD_RESET_TYPES.PASSWORD_RESET_COMPLETED:
            return {
                ...state,
                loginData: action.payload,
            };
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                loginData: null,
            };
        default:
            return state;
    }
};
