import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import oreeganoApi from "../../api/oreeganoApi";
import {GET_NEAR_STORES_TYPES, GetNearStoresAction} from "./getNearStoresTypes";

export interface MisteryBox {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    date?: Date;
    available: number;
}
