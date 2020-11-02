import React, {ComponentProps, ReactText, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {AuthState} from "../../context/auth/authReducer";
import {isFirstAppLaunch} from "../../services/StorageService";
import {UserRoles} from "../../context/auth/authActions";
import {
    NAVIGATION_COMPONENTS_COMMON,
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER
} from "../../data/CommonNavigation";

interface Props extends ComponentProps<any> {

}

const styles = StyleSheet.create({});

const SplashScreen = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {loginData} = useSelector(({authReducer}: { authReducer: AuthState }) => {
        return authReducer;
    });

    // ••• working methods •••
    const setupApp = async () => {
        const isFirstLaunch = await isFirstAppLaunch();
        let component: ReactText;
        if (loginData) {
            if (loginData.user.role === UserRoles.CUSTOMER) {
                component = NAVIGATION_COMPONENTS_CUSTOMER.HOME;
            } else {
                component = NAVIGATION_COMPONENTS_RUNNER.HOME;
            }
        } else {
            if (isFirstLaunch) {
                component = NAVIGATION_COMPONENTS_COMMON.TUTORIAL;
            } else {
                component = NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ACCOUNT;
            }
        }

        Navigation.setStackRoot(restProps.componentId, {
            component: {
                name: component,
            },
        });
    };

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        setupApp();
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

export default SplashScreen;
