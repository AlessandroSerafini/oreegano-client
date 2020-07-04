import {Dispatch} from "redux";
import {PASSWORD_RESET_TYPES, PasswordRecoveryAction, PasswordResetAction} from "./passwordResetTypes";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {PASSWORD_RECOVERY_TYPES} from "./passwordRecoveryTypes";

export const recoveryPassword = (email: string) => async (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    try {
        dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_PENDING });

        const response: AxiosResponse<any> = await oreeganoApi.post(
            '/users/password-recovery',
            {
                email
            },
        );

        dispatch({
            type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_COMPLETED,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const resetPassword = (password: string, token: string) => async (
    dispatch: Dispatch<PasswordResetAction>,
) => {
    try {
        dispatch({ type: PASSWORD_RESET_TYPES.PASSWORD_RESET_PENDING });
        const response: AxiosResponse<any> = await oreeganoApi.post(
            `/users/password-reset/${token}`,
            {
                password
            },
        );

        dispatch({
            type: PASSWORD_RESET_TYPES.PASSWORD_RESET_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: PASSWORD_RESET_TYPES.PASSWORD_RESET_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearRecoveryPasswordErrorMessage = () => (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_CLEAR_ERROR });
};

export const clearResetPasswordErrorMessage = () => (
    dispatch: Dispatch<PasswordResetAction>,
) => {
    dispatch({ type: PASSWORD_RESET_TYPES.PASSWORD_RESET_CLEAR_ERROR });
};

export const resetPasswordRecovery = (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_RESET });
};

export const resetPasswordReset = (
    dispatch: Dispatch<PasswordResetAction>,
) => {
    dispatch({ type: PASSWORD_RESET_TYPES.PASSWORD_RESET_RESET });
};
