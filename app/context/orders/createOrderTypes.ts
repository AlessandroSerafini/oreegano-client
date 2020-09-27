import {SignupAction} from "../auth/signupTypes";
import {Order} from "./ordersActions";

export enum CREATE_ORDER_TYPES {
    CREATE_ORDER_PENDING = 'CREATE_ORDER_PENDING',
    CREATE_ORDER_COMPLETED = 'CREATE_ORDER_COMPLETED',
    CREATE_ORDER_ADD_ERROR = 'CREATE_ORDER_ADD_ERROR',
    CREATE_ORDER_CLEAR_ERROR = 'CREATE_ORDER_CLEAR_ERROR',
    CREATE_ORDER_RESET = 'CREATE_ORDER_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface CreateOrderPending {
    type: CREATE_ORDER_TYPES.CREATE_ORDER_PENDING;
}

interface CreateOrderCompleted {
    type: CREATE_ORDER_TYPES.CREATE_ORDER_COMPLETED;
    payload: Order;
}

interface CreateOrderAddError {
    type: CREATE_ORDER_TYPES.CREATE_ORDER_ADD_ERROR;
    payload: string;
}

interface CreateOrderClearError {
    type: CREATE_ORDER_TYPES.CREATE_ORDER_CLEAR_ERROR;
}

interface CreateOrderReset {
    type: CREATE_ORDER_TYPES.CREATE_ORDER_RESET;
}

export type CreateOrderAction =
    | CreateOrderPending
    | CreateOrderCompleted
    | CreateOrderAddError
    | CreateOrderClearError
    | CreateOrderReset
    | SignupAction;
