import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {Order} from "./ordersActions";
import {CREATE_ORDER_TYPES, CreateOrderAction} from "./createOrderTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    order: null,
};

export interface CreateOrderState {
    errorMessage: string | null;
    pending: boolean;
    order: Order|null;
}

export default (
    state: CreateOrderState = INITIAL_STATE,
    action: CreateOrderAction | SignoutAction,
): CreateOrderState => {
    switch (action.type) {
        case CREATE_ORDER_TYPES.CREATE_ORDER_PENDING:
            return {...state, pending: true};
        case CREATE_ORDER_TYPES.CREATE_ORDER_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                order: action.payload,
            };
        case CREATE_ORDER_TYPES.CREATE_ORDER_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case CREATE_ORDER_TYPES.CREATE_ORDER_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case CREATE_ORDER_TYPES.CREATE_ORDER_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                order: null,
            };
        default:
            return state;
    }
};
