import {SignupAction} from "../auth/signupTypes";
import {Store} from "./storesActions";

export enum GET_NEAR_STORES_TYPES {
    GET_NEAR_STORES_PENDING = 'GET_NEAR_STORES_PENDING',
    GET_NEAR_STORES_COMPLETED = 'GET_NEAR_STORES_COMPLETED',
    GET_NEAR_STORES_ADD_ERROR = 'GET_NEAR_STORES_ADD_ERROR',
    GET_NEAR_STORES_CLEAR_ERROR = 'GET_NEAR_STORES_CLEAR_ERROR',
    GET_NEAR_STORES_RESET = 'GET_NEAR_STORES_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetNearStoresPending {
    type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_PENDING;
}

interface GetNearStoresCompleted {
    type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_COMPLETED;
    payload: Store[];
}

interface GetNearStoresAddError {
    type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_ADD_ERROR;
    payload: string;
}

interface GetNearStoresClearError {
    type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_CLEAR_ERROR;
}

interface GetNearStoresReset {
    type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_RESET;
}

export type GetNearStoresAction =
    | GetNearStoresPending
    | GetNearStoresCompleted
    | GetNearStoresAddError
    | GetNearStoresClearError
    | GetNearStoresReset
    | SignupAction;
