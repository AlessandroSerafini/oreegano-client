import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import Geolocation from '@react-native-community/geolocation';
import Text from "../../../components/Text";
import Block from "../../../components/Block";
import {useDispatch, useSelector} from "react-redux";
import {clearGetNearStoresErrorMessage, getStoresNearMe} from "../../../context/stores/storesActions";
import {GetNearStoresState} from "../../../context/stores/getNearStoresReducer";
import {useLoading} from "../../../providers/LoadingProvider";
import MisteryBoxesList from "../../../components/MisteryBoxesList";
import {SIZES} from "../../../data/ThemeConstants";

interface Props {
}

enum ROOMS {
    MISTERY_BOX_TRACKING = "misteryBoxTrackingRoom"
}

const styles = StyleSheet.create({});

const HomeCustomerScreenView = ({}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••
    const [latitude, setLatitude] = React.useState<number | undefined>(undefined);
    const [longitude, setLongitude] = React.useState<number | undefined>(undefined);

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, stores, errorMessage} = useSelector(
        ({getNearStoresReducer}: { getNearStoresReducer: GetNearStoresState }) => {
            return getNearStoresReducer;
        },
    );

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••
    /*useEffect(() => {
        let url;
        if (__DEV__) {
            url = environment.DEV_SOCKET_BASE_URL;
        } else {
            url = environment.PROD_SOCKET_BASE_URL;
        }

        const socket = SocketIOClient(url);


        socket.on('connect', function () {
            socket.emit(ROOMS.MISTERY_BOX_TRACKING, `${ROOMS.MISTERY_BOX_TRACKING}-${1}`);
        });

        socket.on('updateLocation', (data) => {
            console.log('updated location:', data);
        });


    }, []);*/
    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            const {latitude, longitude} = info.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        });
    }, []);
    useEffect(() => {
        setLoadingVisibility(pending);
    }, [pending]);
    useEffect(() => {
        if (errorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: errorMessage,
                callback: () => {
                    dispatch(clearGetNearStoresErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        if (latitude && longitude) {
            dispatch(getStoresNearMe({lat: latitude, lon: longitude}))
        }
    }, [latitude, longitude]);

    return (
        <SafeAreaView>
                {stores && (
                    <MisteryBoxesList title="Vicini a me" stores={stores} />
                )}
        </SafeAreaView>
    );
};

export default HomeCustomerScreenView;
