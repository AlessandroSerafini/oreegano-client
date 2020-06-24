/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Linking, StyleSheet,} from 'react-native';
import {DEFAULT_TOP_BAR, MODAL_TOP_BAR, NAVIGATION_COMPONENTS} from "./app/data/CommonNavigation";
import SplashScreenContainer from "./app/screens/SplashScreen/SplashScreenContainer";
import TutorialScreenContainer from "./app/screens/TutorialScreen/TutorialScreenContainer";
import TopBarBackground from "./app/components/TopBarBackground";
import SignupScreenContainer from "./app/screens/SignupScreen/SignupScreenContainer";
import SigninScreenContainer from "./app/screens/SigninScreen/SigninScreenContainer";
import HomeScreenContainer from "./app/screens/HomeScreen/HomeScreenContainer";
import PasswordRecoveryScreenContainer from "./app/screens/PasswordRecoveryScreen/PasswordRecoveryScreenContainer";
import PasswordResetScreenContainer from "./app/screens/PasswordResetScreen/PasswordResetScreenContainer";
import {Provider as ReduxStoreProvider} from "react-redux";
import {persistor, store} from "./app/config/store";
import {DropDownAlertContextProvider} from "./app/providers/DropdownAlertProvider";
import {PersistGate} from "redux-persist/integration/react";
import {Navigation} from "react-native-navigation";
import {environment} from "./app/environment/environment";

export enum DEEP_LINKS {
    RESET_PASSWORD = "reset-password",
}

const App = () => {

    // ••• local variables •••
    const {Navigation} = require('react-native-navigation');
    const React = require('react');
    const MAIN_FLOW = {
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: NAVIGATION_COMPONENTS.SPLASH,
                        },
                    },
                ],
            },
        },
    };
    const COMPONENTS = [
        {
            name: NAVIGATION_COMPONENTS.SPLASH,
            concreteComponentProvider: SplashScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.TUTORIAL,
            concreteComponentProvider: TutorialScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.TOP_BAR_BACKGROUND,
            concreteComponentProvider: TopBarBackground,
        },
        {
            name: NAVIGATION_COMPONENTS.SIGN_UP,
            concreteComponentProvider: SignupScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.SIGN_IN,
            concreteComponentProvider: SigninScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.HOME,
            concreteComponentProvider: HomeScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.PASSWORD_RECOVERY,
            concreteComponentProvider: PasswordRecoveryScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS.PASSWORD_RESET,
            concreteComponentProvider: PasswordResetScreenContainer,
        }
    ];
    let isProcessing = true;

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••

    // ••• render methods •••
    const renderWithinProviders = (child) => {
        return (
            <ReduxStoreProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <DropDownAlertContextProvider>
                        {child}
                    </DropDownAlertContextProvider>
                </PersistGate>
            </ReduxStoreProvider>
        )
    };

    // ••• working methods •••
    const registerComponents = () => {
        COMPONENTS.forEach((component) => {
            Navigation.registerComponent(
                component.name,
                () => (props) => renderWithinProviders(<component.concreteComponentProvider {...props} />),
                () => component.concreteComponentProvider,
            );
        });
    };
    const handleProcessDeepLinks = async (url: string | null) => {
        if (url) {
            const persedUrl = url.match(new RegExp(environment.APP_URI + "(.*)" + "/"));
            const action = persedUrl && persedUrl.length > 0 ? persedUrl[1] : null;
            if (action) {
                switch (action) {
                    case DEEP_LINKS.RESET_PASSWORD:
                        const token = url.split("/").pop();
                        // TODO: QUANDO CHIUDE LE MODALI GIA APERTE, POI NON APRE QUELLA DI RESET
                        await Navigation.dismissAllModals();
                        await Navigation.showModal({
                            stack: {
                                children: [
                                    {
                                        component: {
                                            name: NAVIGATION_COMPONENTS.PASSWORD_RESET,
                                            passProps: {
                                                token,
                                            },
                                            options: {
                                                topBar: MODAL_TOP_BAR
                                            }
                                        }
                                    }
                                ]
                            }
                        });
                        break;
                    default:
                        break;
                }
            }

        }
    };
    const getUrlAsync = async () => {
        const initialUrl = await Linking.getInitialURL();
        isProcessing = false;
        return initialUrl;
    };
    const initDeepLinks = async () => {
        console.log("PASSO2");
        // TODO: VEDERE SE SI PUO TOGLIERE IL METODO getUrlAsync
        const initialUrl = await getUrlAsync();
        // handleProcessDeepLinks(initialUrl);

        Linking.addEventListener('url', (data) => {
            console.log("PASSO1", data);
            handleProcessDeepLinks(data.url);
        });
    };

    registerComponents();
    initDeepLinks();

    Navigation.events().registerAppLaunchedListener(async () => {

        Navigation.setDefaultOptions({
            layout: {
                orientation: ['portrait'],
            },
            statusBar: {
                /*backgroundColor: '#4d089a'*/
            },
            topBar: {
                ...DEFAULT_TOP_BAR, ...{
                    background: {
                        component: {
                            name: NAVIGATION_COMPONENTS.TOP_BAR_BACKGROUND,
                        },
                    },
                }
            }
            /*bottomTab: {
                    fontSize: 14,
                          selectedFontSize: 14
                },*/
        });
        Navigation.setRoot(MAIN_FLOW);
    });


    return null;
};

const styles = StyleSheet.create({});

export default App;
