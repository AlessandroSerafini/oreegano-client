export enum SIGNOUT_TYPES {
    SIGNOUT_PENDING = 'SIGNOUT_PENDING',
    SIGNOUT_COMPLETED = 'SIGNOUT_COMPLETED',
    SIGNOUT_ADD_ERROR = 'SIGNOUT_ADD_ERROR',
    SIGNOUT_CLEAR_ERROR = 'SIGNOUT_CLEAR_ERROR',
}

// --------------------------- ACTION INTERFACES ---------------------------

interface SignoutPending {
    type: SIGNOUT_TYPES.SIGNOUT_PENDING;
}

interface SignoutCompleted {
    type: SIGNOUT_TYPES.SIGNOUT_COMPLETED;
}

interface SignoutAddError {
    type: SIGNOUT_TYPES.SIGNOUT_ADD_ERROR;
    payload: string;
}

interface SignoutClearError {
    type: SIGNOUT_TYPES.SIGNOUT_CLEAR_ERROR;
}

export type SignoutAction =
    | SignoutPending
    | SignoutCompleted
    | SignoutAddError
    | SignoutClearError
