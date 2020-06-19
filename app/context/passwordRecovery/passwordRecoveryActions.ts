import { Dispatch } from "redux";
import Axios, { AxiosResponse } from "axios";
import {PASSWORD_RECOVERY_TYPES, PasswordRecoveryAction} from "./passwordRecoveryTypes";

export const RecoveryPassword = (mail: string) => async (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    try {
        dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_PENDING });

        /*const params = new URLSearchParams();

        params.append("account_email", mail);
        params.append("username", STAGING_USERNAME);
        params.append("password", STAGING_PASSWORD);
        params.append("version", getReadableVersion());

        const response: AxiosResponse<any> = await Axios.post(
            `${PRODUCTION_BASE_URL}/forgot_password`,
            params,
        );*/

        /*if (response.data.result) {
            dispatch({
                type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_COMPLETED,
                payload: response.data.result,
            });
        } else {
            dispatch({
                type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_ADD_ERROR,
                payload: response.data.messg,
            });
        }*/
    } catch (err) {
        dispatch({
            type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_ADD_ERROR,
            payload: err,
        });
    }
};

/*export const resetPassword = (
    userId: string,
    resetPasswordCode: string,
    userType: VALIDATION_ACCOUNT_TYPE,
    newPassword: string,
) => async (dispatch: Dispatch<ResetPasswordAction>) => {
    try {
        dispatch({ type: RESET_PASSWORD_TYPES.RESET_PASSWORD_PENDING });

        const response: AxiosResponse<any> = await Axios.get(
            `${RESET_PASSWORD_BASE_URL}/${userId}/${resetPasswordCode}/${userType}/${newPassword}`,
            {},
        );

        if (response.data.result) {
            dispatch({
                type: RESET_PASSWORD_TYPES.RESET_PASSWORD_COMPLETED,
                payload: mapResponseIntoUserInfo(response.data),
            });
        } else {
            dispatch({
                type: RESET_PASSWORD_TYPES.RESET_PASSWORD_ADD_ERROR,
                payload: response.data.messg,
            });
        }
    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_TYPES.RESET_PASSWORD_ADD_ERROR,
            payload: err,
        });
    }
};*/

export const clearRecoveryPasswordErrorMessage = () => (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_CLEAR_ERROR });
};

export const clearResetPasswordErrorMessage = () => (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RESET_CLEAR_ERROR });
};

export const resetPasswordRecovery = (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_RESET });
};
