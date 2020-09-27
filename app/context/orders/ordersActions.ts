import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {CREATE_ORDER_TYPES, CreateOrderAction} from "./createOrderTypes";
import {PASSWORD_RESET_TYPES, PasswordResetAction} from "../passwordRecovery/passwordResetTypes";
import {GET_NEAR_BOXES_TYPES, GetNearBoxesAction} from "../misteryBoxes/getNearBoxesTypes";
import {GET_NEAR_RUNNER_ORDERS_TYPES, GetNearRunnerOrdersAction} from "./getNearRunnerOrdersTypes";
import {NearMe} from "../misteryBoxes/misteryBoxesActions";
import {GET_LATEST_ORDERS_TYPES, GetLatestOrdersAction} from "./getLatestOrdersTypes";

export interface Order {
    id: number;
    userId: number;
    date: string;
    distance: number;
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

// ••• working methods •••
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

export const getOrdersNearRunner = (
    data: NearMe,
) => async (dispatch: Dispatch<GetNearRunnerOrdersAction>) => {
    try {
        dispatch({type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/orders/runner/near',
            {
                params: {
                    lat: data.lat,
                    lon: data.lon,
                    distance: data.distance || 25,
                },
            },
        );

        dispatch({
            type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const getLatestOrdersRunner = (
    data: NearMe,
) => async (dispatch: Dispatch<GetLatestOrdersAction>) => {
    try {
        dispatch({type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/orders/runner/latest',
            {
                params: {
                    lat: data.lat,
                    lon: data.lon,
                },
            },
        );

        dispatch({
            type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_ADD_ERROR,
            payload: error.message,
        });
    }
};

// ••• reset methods •••
export const resetCreateOrder = () => (dispatch: Dispatch<CreateOrderAction>) => {
    dispatch({ type: CREATE_ORDER_TYPES.CREATE_ORDER_RESET });
};

// ••• clear error methods •••
export const clearCreateOrderErrorMessage = () => (dispatch: Dispatch<CreateOrderAction>) => {
    dispatch({type: CREATE_ORDER_TYPES.CREATE_ORDER_CLEAR_ERROR});
};
export const clearGetOrdersNearRunnerErrorMessage = () => (dispatch: Dispatch<GetNearRunnerOrdersAction>) => {
    dispatch({type: GET_NEAR_RUNNER_ORDERS_TYPES.GET_NEAR_RUNNER_ORDERS_CLEAR_ERROR});
};
export const clearGetLatestOrdersErrorMessage = () => (dispatch: Dispatch<GetLatestOrdersAction>) => {
    dispatch({type: GET_LATEST_ORDERS_TYPES.GET_LATEST_ORDERS_CLEAR_ERROR});
};
