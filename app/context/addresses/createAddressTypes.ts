import {SignupAction} from "../auth/signupTypes";
import {Address} from "./addressesActions";

export enum CREATE_ADDRESS_TYPES {
    CREATE_ADDRESS_PENDING = 'CREATE_ADDRESS_PENDING',
    CREATE_ADDRESS_COMPLETED = 'CREATE_ADDRESS_COMPLETED',
    CREATE_ADDRESS_ADD_ERROR = 'CREATE_ADDRESS_ADD_ERROR',
    CREATE_ADDRESS_CLEAR_ERROR = 'CREATE_ADDRESS_CLEAR_ERROR',
    CREATE_ADDRESS_RESET = 'CREATE_ADDRESS_RESET',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface CreateAddressPending {
    type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_PENDING;
}

interface CreateAddressCompleted {
    type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_COMPLETED;
    payload: Address;
}

interface CreateAddressAddError {
    type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_ADD_ERROR;
    payload: string;
}

interface CreateAddressClearError {
    type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_CLEAR_ERROR;
}

interface CreateAddressReset {
    type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_RESET;
}

export type CreateAddressAction =
    | CreateAddressPending
    | CreateAddressCompleted
    | CreateAddressAddError
    | CreateAddressClearError
    | CreateAddressReset
    | SignupAction;
