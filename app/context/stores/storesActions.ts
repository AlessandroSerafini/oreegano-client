import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {GET_NEAR_STORES_TYPES, GetNearStoresAction} from "./getNearStoresTypes";
import {MisteryBox} from "../misteryBoxes/misteryBoxesActions";

export interface Store {
    id: number;
    title: string;
    lat: number;
    lon: number;
    address: string;
    description: string;
    phoneNumber: string;
    haveDelivery: boolean;
    misteryBoxes: MisteryBox[];
    distance?: number;
}

export interface NearMe {
    lat: number;
    lon: number;
    distance?: number;
}

export const getStoresNearMe = (
    data: NearMe,
) => async (dispatch: Dispatch<GetNearStoresAction>) => {
    try {
        dispatch({type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_PENDING});

        const response: AxiosResponse<any> = await oreeganoApi.get(
            '/stores/near-me',
            {
                params: {
                    lat: data.lat,
                    lon: data.lon,
                    distance: data.distance || 25,
                },
            },
        );

        dispatch({
            type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_COMPLETED,
            payload: response.data,
        });
    } catch (e) {
        const {error} = e.response.data;
        dispatch({
            type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_ADD_ERROR,
            payload: error.message,
        });
    }
};

export const clearGetNearStoresErrorMessage = () => (dispatch: Dispatch<GetNearStoresAction>) => {
    dispatch({type: GET_NEAR_STORES_TYPES.GET_NEAR_STORES_CLEAR_ERROR});
};
