import {SIGNUP_TYPES, SignupAction} from './signupTypes';
import {User} from '../../models/User';

const INITIAL_STATE = {
  errorMessage: null,
  pending: false,
  user: null,
};

export interface SignupState {
  errorMessage: string | null;
  pending: boolean;
  user: User | null;
}

export default (
  state: SignupState = INITIAL_STATE,
  action: SignupAction,
): SignupState => {
  switch (action.type) {
    case SIGNUP_TYPES.SIGNUP_PENDING:
      return {...state, pending: true};
    case SIGNUP_TYPES.SIGNUP_COMPLETED:
      return {
        ...state,
        errorMessage: null,
        pending: false,
        user: action.payload,
      };
    case SIGNUP_TYPES.SIGNUP_ADD_ERROR:
      return {...state, errorMessage: action.payload, pending: false};
    case SIGNUP_TYPES.SIGNUP_CLEAR_ERROR:
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
