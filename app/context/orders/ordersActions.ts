import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {CREATE_ORDER_TYPES, CreateOrderAction} from "./createOrderTypes";
import {PASSWORD_RESET_TYPES, PasswordResetAction} from "../passwordRecovery/passwordResetTypes";

export interface Order {
    id: number;
    userId: number;
    date: string;
    boxTitle: string;
    boxDescription: string;
    boxImageUrl: string;
    boxPrice: number;
    boxOldPrice?: number;
    storeTitle: string;
    storeLat: number;
    storeLon: number;
    storeAddress: string;
    storeDescription?: string;
    storePhoneNumber?: string;
    paymentMethod: string;
}

export const createOrder = (
    order: Omit<Order, 'id'>,
) => async (dispatch: Dispatch<CreateOrderAction>) => {
    try {
        dispatch({type: CREATE_ORDER_TYPES.CREATE_ORDER_PENDING});

        // @ts-ignore
        Object.keys(order).forEach((key:string) => (order[key] == null) && delete order[key]);

        const response: AxiosResponse<any> = await oreeganoApi.post(
            `users/${order.userId}/orders`,
            order
        );

        dispatch({
            type: CREATE_ORDER_TYPES.CREATE_ORDER_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: CREATE_ORDER_TYPES.CREATE_ORDER_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearCreateOrderErrorMessage = () => (dispatch: Dispatch<CreateOrderAction>) => {
    dispatch({type: CREATE_ORDER_TYPES.CREATE_ORDER_CLEAR_ERROR});
};

export const resetCreateOrder = () => (dispatch: Dispatch<CreateOrderAction>) => {
    dispatch({ type: CREATE_ORDER_TYPES.CREATE_ORDER_RESET });
};
