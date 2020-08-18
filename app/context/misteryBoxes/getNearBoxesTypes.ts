import {SignupAction} from "../auth/signupTypes";
import {MisteryBox} from "./misteryBoxesActions";

export enum GET_NEAR_BOXES_TYPES {
    GET_NEAR_BOXES_PENDING = 'GET_NEAR_BOXES_PENDING',
    GET_NEAR_BOXES_COMPLETED = 'GET_NEAR_BOXES_COMPLETED',
    GET_NEAR_BOXES_ADD_ERROR = 'GET_NEAR_BOXES_ADD_ERROR',
    GET_NEAR_BOXES_CLEAR_ERROR = 'GET_NEAR_BOXES_CLEAR_ERROR',
    GET_NEAR_BOXES_RESET = 'GET_NEAR_BOXES_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetNearBoxesPending {
    type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_PENDING;
}

interface GetNearBoxesCompleted {
    type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_COMPLETED;
    payload: MisteryBox[];
}

interface GetNearBoxesAddError {
    type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_ADD_ERROR;
    payload: string;
}

interface GetNearBoxesClearError {
    type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_CLEAR_ERROR;
}

interface GetNearBoxesReset {
    type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_RESET;
}

export type GetNearBoxesAction =
    | GetNearBoxesPending
    | GetNearBoxesCompleted
    | GetNearBoxesAddError
    | GetNearBoxesClearError
    | GetNearBoxesReset
    | SignupAction;
