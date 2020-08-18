import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {GET_NEAR_BOXES_TYPES, GetNearBoxesAction} from "./getNearBoxesTypes";
import {MisteryBox} from "./misteryBoxesActions";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    misteryBoxes: null,
};

export interface GetNearBoxesState {
    errorMessage: string | null;
    pending: boolean;
    misteryBoxes: MisteryBox[] | null;
}

export default (
    state: GetNearBoxesState = INITIAL_STATE,
    action: GetNearBoxesAction | SignoutAction,
): GetNearBoxesState => {
    switch (action.type) {
        case GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_PENDING:
            return {...state, pending: true};
        case GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                misteryBoxes: action.payload,
            };
        case GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_RESET:
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
