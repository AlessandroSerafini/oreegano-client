import {SignupAction} from "../auth/signupTypes";
import {MisteryBox} from "./misteryBoxesActions";

export enum GET_SOLD_OUT_BOXES_TYPES {
    GET_SOLD_OUT_BOXES_PENDING = 'GET_SOLD_OUT_BOXES_PENDING',
    GET_SOLD_OUT_BOXES_COMPLETED = 'GET_SOLD_OUT_BOXES_COMPLETED',
    GET_SOLD_OUT_BOXES_ADD_ERROR = 'GET_SOLD_OUT_BOXES_ADD_ERROR',
    GET_SOLD_OUT_BOXES_CLEAR_ERROR = 'GET_SOLD_OUT_BOXES_CLEAR_ERROR',
    GET_SOLD_OUT_BOXES_RESET = 'GET_SOLD_OUT_BOXES_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetSoldOutBoxesPending {
    type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_PENDING;
}

interface GetSoldOutBoxesCompleted {
    type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_COMPLETED;
    payload: MisteryBox[];
}

interface GetSoldOutBoxesAddError {
    type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_ADD_ERROR;
    payload: string;
}

interface GetSoldOutBoxesClearError {
    type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_CLEAR_ERROR;
}

interface GetSoldOutBoxesReset {
    type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_RESET;
}

export type GetSoldOutBoxesAction =
    | GetSoldOutBoxesPending
    | GetSoldOutBoxesCompleted
    | GetSoldOutBoxesAddError
    | GetSoldOutBoxesClearError
    | GetSoldOutBoxesReset
    | SignupAction;
