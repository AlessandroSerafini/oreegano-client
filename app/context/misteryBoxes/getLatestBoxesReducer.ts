import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {MisteryBox} from "./misteryBoxesActions";
import {GET_LATEST_BOXES_TYPES, GetLatestBoxesAction} from "./getLatestBoxesTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    misteryBoxes: null,
};

export interface GetLatestBoxesState {
    errorMessage: string | null;
    pending: boolean;
    misteryBoxes: MisteryBox[] | null;
}

export default (
    state: GetLatestBoxesState = INITIAL_STATE,
    action: GetLatestBoxesAction | SignoutAction,
): GetLatestBoxesState => {
    switch (action.type) {
        case GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_PENDING:
            return {...state, pending: true};
        case GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                misteryBoxes: action.payload,
            };
        case GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                misteryBoxes: null,
            };
        default:
            return state;
    }
};
