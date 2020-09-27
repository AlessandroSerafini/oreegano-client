import React, {ComponentProps, useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Block from "../../../components/Block";
import Text from '../../../components/Text';
import {COLORS, SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import {closeDrawer, NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_STACKS} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";
import {useDispatch, useSelector} from "react-redux";
import {AuthState} from "../../../context/auth/authReducer";
import {signOut} from "../../../context/auth/authActions";
import {isFirstAppLaunch} from "../../../services/StorageService";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props extends ComponentProps<any> {
}

interface Route {
    name: string;
    icon: string;
    component?: any;
    callback?: any;
}

const styles = StyleSheet.create({});

const DrawerScreenView = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    // TODO: IMPLEMENTARE LE ICONE
    const ROUTES: Route[] = [
        {
            name: "Profilo",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            icon: "account-outline",
        },
        {
            name: "Ordini",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            icon: "package-variant-closed",
        },
        {
            name: "Preferiti",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            icon: "heart-outline",
        },
        {
            name: "Impostazioni",
            component: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            icon: "cog-outline",
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
    const renderMenuItem = (route: Route): React.ReactNode => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                key={route.name}
                style={{
                    paddingVertical: SIZES.DEFAULT_PADDING,
                    paddingHorizontal: SIZES.DEFAULT_PADDING * 1.5,
                    flexDirection: "row",
                    alignItems: "center",
                }}
                onPress={!!route.callback ? route.callback : () => {
                    closeDrawer();
                    Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                        component: {
                            name: route.component,
                        },
                    });
                }}>
                <Block width={40} height={40}
                       style={{
                           borderWidth: 1,
                           borderRadius: SIZES.BORDER_RADIUS,
                           borderColor: COLORS.GREY,
                           marginRight: 10,
                           alignItems: "center",
                           justifyContent: "center",
                       }}>
                    <Icon name={route.icon}
                          color={COLORS.GREY}
                          size={30}
                    />
                </Block>
                <Text color="rgba(0,0,0,0.6)">
                    {route.name}
                </Text>
            </TouchableOpacity>
        );
    }

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

    return (
        <Block flex>
            <Block style={{
                paddingHorizontal: SIZES.DEFAULT_PADDING * 1.5,
                paddingTop: SIZES.DEFAULT_PADDING * 6,
                paddingBottom: SIZES.DEFAULT_PADDING,
                borderBottomRightRadius: 50,
                backgroundColor: COLORS.GREYISH_GREEN
            }}>
                <Text h1 light color={"#FFF"}>Ciao,</Text>
                <Text h1 bold color={"#FFF"} ellipsizeMode="tail"
                      numberOfLines={1}>{loginData?.user.name}</Text>
            </Block>
            <NewLine multiplier={2}/>
            {ROUTES.length > 0 && (
                <Block>
                    {ROUTES.map((route) => {
                            return renderMenuItem(route);
                        }
                    )}
                </Block>
            )}
            {renderMenuItem({
                name: "Signout",
                icon: "logout",
                callback: () => {
                    dispatch(signOut());
                }
            })}
            <Image
                source={require('../../../assets/images/ramo.png')}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0
                }}
            />
        </Block>
    );
};

export default DrawerScreenView;
