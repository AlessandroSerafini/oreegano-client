import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import {
    DropdownAlertContext,
    useDropDown,
} from '../../providers/DropdownAlertProvider';
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS} from "../../../index";

interface Props {
}

const styles = StyleSheet.create({});

const SplashScreenView = (props) => {
    // ••• local variables •••

    // ••• navigation variables •••

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
        // TODO: SE SONO LOGGATO, REDIREZIONARE ALLA HOME SCREEN
        Navigation.setStackRoot(props.componentId, {
            component: {
                name: loginData ? NAVIGATION_COMPONENTS.SIGN_UP : NAVIGATION_COMPONENTS.SIGN_UP,
            }
        });

    }, [loginData]);

    // TODO: DISEGNARE LA SPLASH SCREEN
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>SplashScreenView</Text>
        </View>
    );
};

export default SplashScreenView;
