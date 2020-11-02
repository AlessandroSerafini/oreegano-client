import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import Geolocation from '@react-native-community/geolocation';
import Block from "../../components/Block";
import {useDispatch, useSelector} from "react-redux";
import {useLoading} from "../../providers/LoadingProvider";
import MisteryBoxesList from "../../components/misteryBox/MisteryBoxesList";
import NewLine from "../../components/NewLine";
import {GetLatestBoxesState} from "../../context/misteryBoxes/getLatestBoxesReducer";
import {GetNearBoxesState} from "../../context/misteryBoxes/getNearBoxesReducer";
import {
    clearGetLatestBoxesErrorMessage,
    clearGetNearBoxesErrorMessage,
    clearGetSoldOutBoxesErrorMessage,
    getBoxesNearMe,
    getLatestBoxes,
    getSoldOutBoxes
} from "../../context/misteryBoxes/misteryBoxesActions";
import {SIZES} from "../../data/ThemeConstants";
import Title from "../../components/Title";
import {openDrawer} from "../../data/CommonNavigation";
import {useLocation} from "../../providers/LocationProvider";

interface Props {
}

enum ROOMS {
    MISTERY_BOX_TRACKING = "misteryBoxTrackingRoom"
}

const styles = StyleSheet.create({});

const HomeCustomerScreen = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();
    const {getLocation} = useLocation();

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending: nerMePending, misteryBoxes: nearBoxes, errorMessage: nearMeErrorMessage} = useSelector(
        ({getNearBoxesReducer}: { getNearBoxesReducer: GetNearBoxesState }) => {
            return getNearBoxesReducer;
        },
    );
    const {pending: latestBoxesPending, misteryBoxes: latestBoxes, errorMessage: latestBoxesErrorMessage} = useSelector(
        ({getLatestBoxesReducer}: { getLatestBoxesReducer: GetLatestBoxesState }) => {
            return getLatestBoxesReducer;
        },
    );
    const {pending: soldOutBoxesPending, misteryBoxes: soldOutBoxes, errorMessage: soldOutBoxesErrorMessage} = useSelector(
        ({getSoldOutBoxesReducer}: { getSoldOutBoxesReducer: GetLatestBoxesState }) => {
            return getSoldOutBoxesReducer;
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
        setLoadingVisibility(nerMePending || latestBoxesPending || soldOutBoxesPending);
    }, [nerMePending, latestBoxesPending, soldOutBoxesPending]);
    useEffect(() => {
        if (nearMeErrorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: nearMeErrorMessage,
                callback: () => {
                    dispatch(clearGetNearBoxesErrorMessage());
                },
            });
        }
    }, [nearMeErrorMessage]);
    useEffect(() => {
        if (latestBoxesErrorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: latestBoxesErrorMessage,
                callback: () => {
                    dispatch(clearGetLatestBoxesErrorMessage());
                },
            });
        }
    }, [latestBoxesErrorMessage]);
    useEffect(() => {
        if (soldOutBoxesErrorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: soldOutBoxesErrorMessage,
                callback: () => {
                    dispatch(clearGetSoldOutBoxesErrorMessage());
                },
            });
        }
    }, [soldOutBoxesErrorMessage]);
    useEffect(() => {
        (async () => {
            const {latitude, longitude} = await getLocation();

            await dispatch(getBoxesNearMe({lat: latitude, lon: longitude}))
            await dispatch(getLatestBoxes({lat: latitude, lon: longitude}));
            await dispatch(getSoldOutBoxes({lat: latitude, lon: longitude}));
        })();
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={{paddingHorizontal: SIZES.DEFAULT_PADDING}}>
                <NewLine multiplier={3}/>
                <Title title={"Scopri"}
                       showImage
                       rightButtons={[
                           {
                               name: "menu",
                               callback: () => openDrawer()
                           }
                       ]}
                />
                {nearBoxes && nearBoxes.length > 0 && (
                    <>
                        <MisteryBoxesList title="Vicini a me" boxes={nearBoxes} {...restProps}/>
                        <NewLine multiplier={4}/>
                    </>
                )}
                {latestBoxes && latestBoxes.length > 0 && (
                    <>
                        <MisteryBoxesList title="Ultime possibilità" boxes={latestBoxes} {...restProps}/>
                        <NewLine multiplier={4}/>
                    </>
                )}
                {soldOutBoxes && soldOutBoxes.length > 0 && (
                    <>
                        <MisteryBoxesList title="Perse per un pelo" boxes={soldOutBoxes} {...restProps}/>
                        <NewLine multiplier={4}/>
                    </>
                )}
            </Block>
        </ScrollView>
    );
};

export default HomeCustomerScreen;
