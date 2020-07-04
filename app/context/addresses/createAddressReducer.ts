import {SIGNOUT_TYPES, SignoutAction} from "../auth/signoutTypes";
import {CREATE_ADDRESS_TYPES, CreateAddressAction} from "./createAddressTypes";
import {Address} from "./addressesActions";

const INITIAL_STATE = {
    errorMessage: null,
    pending: false,
    address: null,
};

export interface CreateAddressState {
    errorMessage: string | null;
    pending: boolean;
    address: Address|null;
}

export default (
    state: CreateAddressState = INITIAL_STATE,
    action: CreateAddressAction | SignoutAction,
): CreateAddressState => {
    switch (action.type) {
        case CREATE_ADDRESS_TYPES.CREATE_ADDRESS_PENDING:
            return {...state, pending: true};
        case CREATE_ADDRESS_TYPES.CREATE_ADDRESS_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                address: action.payload,
            };
        case CREATE_ADDRESS_TYPES.CREATE_ADDRESS_ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                pending: false,
            };
        case CREATE_ADDRESS_TYPES.CREATE_ADDRESS_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null,
                pending: false,
            };
        case CREATE_ADDRESS_TYPES.CREATE_ADDRESS_RESET:
        case SIGNOUT_TYPES.SIGNOUT_COMPLETED:
            return {
                ...state,
                errorMessage: null,
                pending: false,
                address: null,
            };
        default:
            return state;
    }
};
