import {Dispatch} from "redux";
import {PASSWORD_RECOVERY_TYPES, PasswordRecoveryAction} from "./passwordRecoveryTypes";
import {SIGNUP_TYPES} from "../auth/signupTypes";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {SIGNOUT_TYPES} from "../auth/signoutTypes";

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
    // dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RESET_CLEAR_ERROR });
};

export const resetPasswordRecovery = (
    dispatch: Dispatch<PasswordRecoveryAction>,
) => {
    dispatch({ type: PASSWORD_RECOVERY_TYPES.PASSWORD_RECOVERY_RESET });
};
