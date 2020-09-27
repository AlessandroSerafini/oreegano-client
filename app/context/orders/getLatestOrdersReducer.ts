import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {Order} from "./ordersActions";
import {GET_LATEST_ORDERS_TYPES, GetLatestOrdersAction} from "./getLatestOrdersTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    orders: null,
};

export interface GetLatestOrdersState {
    errorMessage: string | null;
    pending: boolean;
    orders: Order[] | null;
}

export default (
    state: GetLatestOrdersState = INITIAL_STATE,
    action: GetLatestOrdersAction | SignoutAction,
): GetLatestOrdersState => {
    switch (action.type) {
        case GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_PENDING:
            return {...state, pending: true};
        case GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                orders: action.payload,
            };
        case GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                orders: null,
            };
        default:
            return state;
    }
};
