import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Block from "../../../components/Block";
import Text from '../../../components/Text';
import {SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import {closeDrawer, NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_STACKS} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";
import {useDispatch, useSelector} from "react-redux";
import {AuthState} from "../../../context/auth/authReducer";
import {signOut} from "../../../context/auth/authActions";
import {isFirstAppLaunch} from "../../../services/StorageService";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({});

const DrawerScreenView = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    // TODO: IMPLEMENTARE LE ICONE
    const ROUTES = [
        {
            name: "Screen One",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
        },
        {
            name: "Screen Two",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
        },
        {
            name: "Screen Three",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
        },
        {
            name: "Screen Four",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
        },
        {
            name: "Screen Five",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
        },
    ];

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {loginData} = useSelector(({authReducer}: { authReducer: AuthState }) => {
        return authReducer;
    });

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••

    useEffect(() => {
        if (!loginData) {
            (async () => {
                closeDrawer();
                if (!await isFirstAppLaunch()) {
                    Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                        component: {
                            name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ACCOUNT,
                        },
                    });
                }
            })();
        }
    }, [loginData]);

    // TODO: STILARE MEGLIO IL DRAWER

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f2f3ee"}}>
            <Block flex style={{
                paddingTop: SIZES.DEFAULT_PADDING * 1.5,
            }}>
                <Block style={{paddingHorizontal: SIZES.DEFAULT_PADDING * 1.5}}>
                    <Text h1 light>Ciao,</Text>
                    <Text h1 bold ellipsizeMode="tail"
                          numberOfLines={1}>{loginData?.user.name}</Text>
                </Block>
                <NewLine multiplier={2}/>
                {ROUTES.length > 0 && (
                    <Block>
                        {ROUTES.map((route) =>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    paddingVertical: SIZES.DEFAULT_PADDING,
                                }}
                                onPress={() => {
                                    Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                                        component: {
                                            name: route.component,
                                        },
                                    });
                                }}>
                                <Text color="rgba(0,0,0,0.6)" style={{paddingHorizontal: SIZES.DEFAULT_PADDING * 1.5}}>
                                    {route.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </Block>
                )}
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        paddingVertical: SIZES.DEFAULT_PADDING,
                    }}
                    onPress={() => {
                        dispatch(signOut());
                    }}>
                    <Text color="rgba(0,0,0,0.6)" style={{paddingHorizontal: SIZES.DEFAULT_PADDING * 1.5}}>
                        Signout
                    </Text>
                </TouchableOpacity>
            </Block>
        </SafeAreaView>
    );
};

export default DrawerScreenView;
