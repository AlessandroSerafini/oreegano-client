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
}
