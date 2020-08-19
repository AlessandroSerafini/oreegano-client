import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DropdownAlertContext,} from '../../../providers/DropdownAlertProvider';
import {environment} from "../../../environment/environment";
import SocketIOClient from 'socket.io-client';
import {useSelector} from "react-redux";
import {AuthState} from "../../../context/auth/authReducer";

interface Props extends ComponentProps<any>{
}

enum ROOMS {
    MISTERY_BOX_TRACKING = "misteryBoxTrackingRoom"
}

const styles = StyleSheet.create({});

const HomeRunnerScreenView = ({...restProps}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {loginData} = useSelector(
        ({authReducer}: { authReducer: AuthState }) => {
            return authReducer;
        },
    );

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
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


    }, []);

    return (
        <SafeAreaView>

        </SafeAreaView>
    );
};

export default HomeRunnerScreenView;
