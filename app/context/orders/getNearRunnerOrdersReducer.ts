import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {Order} from "./ordersActions";
import {GET_NEAR_RUNNER_ORDERS_TYPES, GetNearRunnerOrdersAction} from "./getNearRunnerOrdersTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    orders: null,
};

export interface GetNearRunnerOrdersState {
    errorMessage: string | null;
    pending: boolean;
    orders: Order[] | null;
}

export default (
    state: GetNearRunnerOrdersState = INITIAL_STATE,
    action: GetNearRunnerOrdersAction | SignoutAction,
): GetNearRunnerOrdersState => {
    switch (action.type) {
        case GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_PENDING:
            return {...state, pending: true};
        case GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                orders: action.payload,
            };
        case GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_RESET:
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
