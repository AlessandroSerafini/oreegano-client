import {SignupAction} from "../auth/signupTypes";
import {Order} from "./ordersActions";

export enum GET_LATEST_ORDERS_TYPES {
    GET_LATEST_ORDERS_PENDING = 'GET_LATEST_ORDERS_PENDING',
    GET_LATEST_ORDERS_COMPLETED = 'GET_LATEST_ORDERS_COMPLETED',
    GET_LATEST_ORDERS_ADD_ERROR = 'GET_LATEST_ORDERS_ADD_ERROR',
    GET_LATEST_ORDERS_CLEAR_ERROR = 'GET_LATEST_ORDERS_CLEAR_ERROR',
    GET_LATEST_ORDERS_RESET = 'GET_LATEST_ORDERS_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetLatestOrdersPending {
    type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_PENDING;
}

interface GetLatestOrdersCompleted {
    type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_COMPLETED;
    payload: Order[];
}

interface GetLatestOrdersAddError {
    type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_ADD_ERROR;
    payload: string;
}

interface GetLatestOrdersClearError {
    type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_CLEAR_ERROR;
}

interface GetLatestOrdersReset {
    type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_RESET;
}

export type GetLatestOrdersAction =
    | GetLatestOrdersPending
    | GetLatestOrdersCompleted
    | GetLatestOrdersAddError
    | GetLatestOrdersClearError
    | GetLatestOrdersReset
    | SignupAction;
