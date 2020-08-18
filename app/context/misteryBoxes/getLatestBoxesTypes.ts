import {SignupAction} from "../auth/signupTypes";
import {MisteryBox} from "./misteryBoxesActions";

export enum GET_LATEST_BOXES_TYPES {
    GET_LATEST_BOXES_PENDING = 'GET_LATEST_BOXES_PENDING',
    GET_LATEST_BOXES_COMPLETED = 'GET_LATEST_BOXES_COMPLETED',
    GET_LATEST_BOXES_ADD_ERROR = 'GET_LATEST_BOXES_ADD_ERROR',
    GET_LATEST_BOXES_CLEAR_ERROR = 'GET_LATEST_BOXES_CLEAR_ERROR',
    GET_LATEST_BOXES_RESET = 'GET_LATEST_BOXES_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface GetLatestBoxesPending {
    type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_PENDING;
}

interface GetLatestBoxesCompleted {
    type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_COMPLETED;
    payload: MisteryBox[];
}

interface GetLatestBoxesAddError {
    type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_ADD_ERROR;
    payload: string;
}

interface GetLatestBoxesClearError {
    type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_CLEAR_ERROR;
}

interface GetLatestBoxesReset {
    type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_RESET;
}

export type GetLatestBoxesAction =
    | GetLatestBoxesPending
    | GetLatestBoxesCompleted
    | GetLatestBoxesAddError
    | GetLatestBoxesClearError
    | GetLatestBoxesReset
    | SignupAction;
