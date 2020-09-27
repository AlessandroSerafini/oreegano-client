import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {CREATE_ADDRESS_TYPES, CreateAddressAction} from "./createAddressTypes";

export interface Address {
    address: string;
    postalCode: string;
    city: string;
    state: string;
}

export const createAddress = (
    address: Omit<Address, 'id'>,
    idUser: number
) => async (dispatch: Dispatch<CreateAddressAction>) => {
    try {
        dispatch({type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.post(
            `users/${idUser}/addresses`,
            address
        );

        dispatch({
            type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearCreateAddressErrorMessage = () => (dispatch: Dispatch<CreateAddressAction>) => {
    dispatch({type: CREATE_ADDRESS_TYPES.CREATE_ADDRESS_CLEAR_ERROR});
};
