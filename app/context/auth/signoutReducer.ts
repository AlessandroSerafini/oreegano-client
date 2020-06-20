import {AuthAction, SIGNOUT_TYPES, SignoutAction} from "./signoutTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
};

export interface SignoutState {
    errorMessage: string | null;
    pending: boolean;
}

export default (
    state: SignoutState = INITIAL_STATE,
    action: SignoutAction | AuthAction,
): SignoutState => {
    switch (action.type) {
        case SIGNOUT_TYPES.SIGNOUT_PENDING:
            return {...state, pending: true};
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case SIGNOUT_TYPES.SIGNOUT_ADD_ERROR:
            return {...state, errorMessage: action.payload, pending: false};
        case SIGNOUT_TYPES.SIGNOUT_CLEAR_ERROR:
            return {...state, errorMessage: null, pending: false};
        default:
            return state;
    }
};
