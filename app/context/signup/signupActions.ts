import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import phomeApi from "../../api/phomeApi";
import {SIGNUP_TYPES, SignupAction} from "./signupTypes";
import {User} from "../../models/User";

export const addAddress = (
    data: User
) => async (dispatch: Dispatch<SignupAction>) => {
    try {
        dispatch({type: SIGNUP_TYPES.SIGNUP_PENDING});

        const response: AxiosResponse<any> = await phomeApi.post("/users/signup", {
            params: {
                id,
                indirizzo: address,
                cap: postalCode,
                citta: city,
                provincia: province,
                lat: String(lat),
                lon: String(lon),
            },
        });


        dispatch({
            type: SIGNUP_TYPES.SIGNUP_COMPLETED,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_TYPES.SIGNUP_ADD_ERROR,
            payload: err,
        });
    }
};
