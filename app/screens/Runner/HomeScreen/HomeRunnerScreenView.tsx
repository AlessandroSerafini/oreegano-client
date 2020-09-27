import React, {ComponentProps, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import {useDispatch, useSelector} from "react-redux";
import {SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import Title from "../../../components/Title";
import Block from "../../../components/Block";
import {
    clearGetLatestOrdersErrorMessage,
    clearGetOrdersNearRunnerErrorMessage, getLatestOrdersRunner,
    getOrdersNearRunner
} from "../../../context/orders/ordersActions";
import {GetNearRunnerOrdersState} from "../../../context/orders/getNearRunnerOrdersReducer";
import {useLoading} from "../../../providers/LoadingProvider";
import Geolocation from "@react-native-community/geolocation";
import MisteryBoxesList from "../../../components/misteryBox/MisteryBoxesList";
import OrdersList from "../../../components/orderBox/OrderBoxesList";
import Text from "../../../components/Text";
import {GetLatestOrdersState} from "../../../context/orders/getLatestOrdersReducer";

interface Props extends ComponentProps<any> {
}

enum ROOMS {
    MISTERY_BOX_TRACKING = "misteryBoxTrackingRoom"
}

const styles = StyleSheet.create({});

const HomeRunnerScreenView = ({...restProps}: Props) => {
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
    const {pending: nerMePending, orders: nearOrders, errorMessage: nearMeErrorMessage} = useSelector(
        ({getNearRunnerOrdersReducer}: { getNearRunnerOrdersReducer: GetNearRunnerOrdersState }) => {
            return getNearRunnerOrdersReducer;
        },
    );
    const {pending: lastPending, orders: lastOrders, errorMessage: lastErrorMessage} = useSelector(
        ({getLatestOrdersReducer}: { getLatestOrdersReducer: GetLatestOrdersState }) => {
            return getLatestOrdersReducer;
        },
    );

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            const {latitude, longitude} = info.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        });


        /*let url;
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
        });*/


    }, []);
    useEffect(() => {
        setLoadingVisibility(nerMePending || lastPending);
    }, [nerMePending, lastPending]);
    useEffect(() => {
        if (nearMeErrorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: nearMeErrorMessage,
                callback: () => {
                    dispatch(clearGetOrdersNearRunnerErrorMessage());
                },
            });
        }
    }, [nearMeErrorMessage]);
    useEffect(() => {
        if (lastErrorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: lastErrorMessage,
                callback: () => {
                    dispatch(clearGetLatestOrdersErrorMessage());
                },
            });
        }
    }, [lastErrorMessage]);
    useEffect(() => {
        if (latitude && longitude) {
            dispatch(getOrdersNearRunner({lat: latitude, lon: longitude}))
            dispatch(getLatestOrdersRunner({lat: latitude, lon: longitude}))
        }
    }, [latitude, longitude]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={{paddingHorizontal: SIZES.DEFAULT_PADDING}}>
                <NewLine multiplier={3}/>
                <Title title={"Ordini"}
                       subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                       showImage
                    /*rightButtons={[
                        {
                            name: "menu",
                            callback: () => openDrawer()
                        }
                    ]}*/
                />
                {!!nearOrders && nearOrders.length > 0 &&
                (
                    <>
                        <OrdersList title="Vicini a me" orders={nearOrders} {...restProps}/>
                        <NewLine multiplier={4}/>
                    </>
                )}
                {!!lastOrders && lastOrders.length > 0 &&
                <OrdersList title="Recenti" orders={lastOrders} {...restProps}/>}
            </Block>
        </ScrollView>
    );
};

export default HomeRunnerScreenView;
