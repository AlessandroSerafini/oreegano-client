import {AUTH_TYPES, AuthAction} from './authTypes';
import {User} from '../../models/User';
import { JwtResponse } from "./authActions";

const INITIAL_STATE = {
  errorMessage: null,
  pending: false,
  loginData: null,
};

export interface AuthState {
  errorMessage: string | null;
  pending: boolean;
  loginData: JwtResponse | null;
}

export default (
  state: AuthState = INITIAL_STATE,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTH_TYPES.SIGNUP_PENDING:
      return {...state, pending: true};
    case AUTH_TYPES.SIGNUP_COMPLETED:
      return {
        ...state,
        errorMessage: null,
        pending: false,
        loginData: action.payload,
      };
    case AUTH_TYPES.SIGNUP_ADD_ERROR:
      return {...state, errorMessage: action.payload, pending: false};
    case AUTH_TYPES.SIGNUP_CLEAR_ERROR:
      return {...state, errorMessage: null, pending: false};
    /*case AUTH_TYPES.SIGNOUT:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                user: null,
            };*/
    default:
      return state;
  }
};
