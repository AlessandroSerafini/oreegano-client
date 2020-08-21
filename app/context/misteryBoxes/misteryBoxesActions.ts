import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {GET_LATEST_BOXES_TYPES, GetLatestBoxesAction} from "./getLatestBoxesTypes";
import {GET_NEAR_BOXES_TYPES, GetNearBoxesAction} from "./getNearBoxesTypes";
import {GET_SOLD_OUT_BOXES_TYPES, GetSoldOutBoxesAction} from "./getSoldOutBoxesTypes";
import {Store} from "../stores/storesActions";

export interface MisteryBox {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    distance: number;
    available: number;
    store: Store
    date: Date;
    oldPrice?: number;
}

export interface NearMe {
    lat: number;
    lon: number;
    distance?: number;
}

export const getBoxesNearMe = (
    data: NearMe,
) => async (dispatch: Dispatch<GetNearBoxesAction>) => {
    try {
        dispatch({type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/mistery-boxes/near-me',
            {
                params: {
                    lat: data.lat,
                    lon: data.lon,
                    distance: data.distance || 25,
                },
            },
        );

        dispatch({
            type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const getLatestBoxes = () => async (dispatch: Dispatch<GetLatestBoxesAction>) => {
    try {
        dispatch({type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/mistery-boxes/latest',
        );

        dispatch({
            type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const getSoldOutBoxes = () => async (dispatch: Dispatch<GetSoldOutBoxesAction>) => {
    try {
        dispatch({type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/mistery-boxes/sold-out',
        );

        dispatch({
            type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const getBoxesByStore = async(idStore: number):Promise<MisteryBox[]> => {
    try {
        const response: AxiosResponse<any> = await oreeganoApi.get(
            `/stores/${idStore}/mistery-boxes`,
        );
        return response.data;
    } catch (e) {
        throw new Error(e.response.data);
    }
};

export const clearGetNearBoxesErrorMessage = () => (dispatch: Dispatch<GetNearBoxesAction>) => {
    dispatch({type: GET_NEAR_BOXES_TYPES.GET_NEAR_BOXES_CLEAR_ERROR});
};

export const clearGetLatestBoxesErrorMessage = () => (dispatch: Dispatch<GetLatestBoxesAction>) => {
    dispatch({type: GET_LATEST_BOXES_TYPES.GET_LATEST_BOXES_CLEAR_ERROR});
};

export const clearGetSoldOutBoxesErrorMessage = () => (dispatch: Dispatch<GetSoldOutBoxesAction>) => {
    dispatch({type: GET_SOLD_OUT_BOXES_TYPES.GET_SOLD_OUT_BOXES_CLEAR_ERROR});
};
