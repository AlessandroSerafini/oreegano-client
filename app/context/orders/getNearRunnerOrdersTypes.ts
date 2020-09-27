import {SignupAction} from "../auth/signupTypes";
import {Order} from "./ordersActions";

export enum GET_NEAR_RUNNER_ORDERS_TYPES {
    GET_NEAR_RUNNER_ORDERS_PENDING = 'GET_NEAR_RUNNER_ORDERS_PENDING',
    GET_NEAR_RUNNER_ORDERS_COMPLETED = 'GET_NEAR_RUNNER_ORDERS_COMPLETED',
    GET_NEAR_RUNNER_ORDERS_ADD_ERROR = 'GET_NEAR_RUNNER_ORDERS_ADD_ERROR',
    GET_NEAR_RUNNER_ORDERS_CLEAR_ERROR = 'GET_NEAR_RUNNER_ORDERS_CLEAR_ERROR',
    GET_NEAR_RUNNER_ORDERS_RESET = 'GET_NEAR_RUNNER_ORDERS_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetNearRunnerOrdersPending {
    type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_PENDING;
}

interface GetNearRunnerOrdersCompleted {
    type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_COMPLETED;
    payload: Order[];
}

interface GetNearRunnerOrdersAddError {
    type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_ADD_ERROR;
    payload: string;
}

interface GetNearRunnerOrdersClearError {
    type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_CLEAR_ERROR;
}

interface GetNearRunnerOrdersReset {
    type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_RESET;
}

export type GetNearRunnerOrdersAction =
    | GetNearRunnerOrdersPending
    | GetNearRunnerOrdersCompleted
    | GetNearRunnerOrdersAddError
    | GetNearRunnerOrdersClearError
    | GetNearRunnerOrdersReset
    | SignupAction;
