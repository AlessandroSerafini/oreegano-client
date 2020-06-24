/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {DEFAULT_TOP_BAR, NAVIGATION_COMPONENTS} from "../data/CommonNavigation";
import SplashScreenContainer from "../screens/SplashScreen/SplashScreenContainer";
import TutorialScreenContainer from "../screens/TutorialScreen/TutorialScreenContainer";
import TopBarBackground from "../components/TopBarBackground";
import SignupScreenContainer from "../screens/SignupScreen/SignupScreenContainer";
import SigninScreenContainer from "../screens/SigninScreen/SigninScreenContainer";
import HomeScreenContainer from "../screens/HomeScreen/HomeScreenContainer";
import PasswordRecoveryScreenContainer from "../screens/PasswordRecoveryScreen/PasswordRecoveryScreenContainer";
import PasswordResetScreenContainer from "../screens/PasswordResetScreen/PasswordResetScreenContainer";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {DropDownAlertContextProvider} from "../providers/DropdownAlertProvider";
import {Provider as ReduxStoreProvider} from "react-redux";

const SetupNavigation = () => {
    // ••• local variables •••
    const React = require('react');
    const {Navigation} = require('react-native-navigation');
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

    registerComponents();

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


export default SetupNavigation;
