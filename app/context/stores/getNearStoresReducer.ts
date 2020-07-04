import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {Store} from "./storesActions";
import {GET_NEAR_STORES_TYPES, GetNearStoresAction} from "./getNearStoresTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    stores: null,
};

export interface GetNearStoresState {
    errorMessage: string | null;
    pending: boolean;
    stores: Store[] | null;
}

export default (
    state: GetNearStoresState = INITIAL_STATE,
    action: GetNearStoresAction | SignoutAction,
): GetNearStoresState => {
    switch (action.type) {
        case GET_NEAR_STORES_TYPES.GET_NEAR_STORES_PENDING:
            return {...state, pending: true};
        case GET_NEAR_STORES_TYPES.GET_NEAR_STORES_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                stores: action.payload,
            };
        case GET_NEAR_STORES_TYPES.GET_NEAR_STORES_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_NEAR_STORES_TYPES.GET_NEAR_STORES_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_NEAR_STORES_TYPES.GET_NEAR_STORES_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                stores: null,
            };
        default:
            return state;
    }
};
