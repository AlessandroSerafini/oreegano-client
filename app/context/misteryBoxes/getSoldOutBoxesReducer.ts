import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {MisteryBox} from "./misteryBoxesActions";
import {GET_SOLD_OUT_BOXES_TYPES, GetSoldOutBoxesAction} from "./getSoldOutBoxesTypes";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    misteryBoxes: null,
};

export interface GetSoldOutBoxesState {
    errorMessage: string | null;
    pending: boolean;
    misteryBoxes: MisteryBox[] | null;
}

export default (
    state: GetSoldOutBoxesState = INITIAL_STATE,
    action: GetSoldOutBoxesAction | SignoutAction,
): GetSoldOutBoxesState => {
    switch (action.type) {
        case GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_PENDING:
            return {...state, pending: true};
        case GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                misteryBoxes: action.payload,
            };
        case GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_RESET:
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
