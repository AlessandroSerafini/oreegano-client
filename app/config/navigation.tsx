/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {
    DEFAULT_TOP_BAR,
    NAVIGATION_COMPONENTS_COMMON,
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER,
    NAVIGATION_STACKS
} from "../data/CommonNavigation";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {DropDownAlertContextProvider} from "../providers/DropdownAlertProvider";
import {Provider as ReduxStoreProvider} from "react-redux";
import OrderDetailScreenContainer from "../screens/Customer/OrderDetailScreen/OrderDetailScreenContainer";
import SplashScreenContainer from "../screens/Common/SplashScreen/SplashScreenContainer";
import TutorialScreenContainer from "../screens/Common/TutorialScreen/TutorialScreenContainer";
import SigninScreenContainer from "../screens/Common/SigninScreen/SigninScreenContainer";
import PasswordRecoveryScreenContainer from "../screens/Common/PasswordRecoveryScreen/PasswordRecoveryScreenContainer";
import PasswordResetScreenContainer from "../screens/Common/PasswordResetScreen/PasswordResetScreenContainer";
import SignupRunnerScreenContainer from "../screens/Runner/SignupScreen/SignupRunnerScreenContainer";
import SignupCustomerAddressScreenContainer
    from "../screens/Customer/SignupScreen/SignupCustomerAddressScreenContainer";
import SignupCustomerAccountScreenContainer
    from "../screens/Customer/SignupScreen/SignupCustomerAccountScreenContainer";
import HomeCustomerScreenContainer from "../screens/Customer/HomeScreen/HomeCustomerScreenContainer";
import HomeRunnerScreenContainer from "../screens/Runner/HomeScreen/HomeRunnerScreenContainer";
import DrawerScreenContainer from "../screens/Common/DrawerScreen/DrawerScreenContainer";
import {LoadingContextProvider} from "../providers/LoadingProvider";
import BoxDetailScreenContainer from "../screens/Customer/BoxDetailScreen/BoxDetailScreenContainer";
import {PropsWithChildren} from "react";

const SetupNavigation = () => {
    // ••• local variables •••
    const React = require('react');
    const {Navigation} = require('react-native-navigation');
    const MAIN_FLOW = {
        root: {
            sideMenu: {
                id: NAVIGATION_STACKS.LEFT,
                left: {
                    component: {
                        name: NAVIGATION_COMPONENTS_COMMON.DRAWER,
                    }
                },
                center: {
                    stack: {
                        id: NAVIGATION_STACKS.CENTER,
                        children: [{
                            component: {
                                name: NAVIGATION_COMPONENTS_COMMON.SPLASH,
                            }
                        }]
                    }
                }
            }
        },
    };
    const COMPONENTS = [
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ACCOUNT,
            concreteComponentProvider: SignupCustomerAccountScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ADDRESS,
            concreteComponentProvider: SignupCustomerAddressScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            concreteComponentProvider: HomeCustomerScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.ORDER_DETAIL,
            concreteComponentProvider: OrderDetailScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.BOX_DETAIL,
            concreteComponentProvider: BoxDetailScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.SIGN_UP,
            concreteComponentProvider: SignupRunnerScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.SIGN_UP,
            concreteComponentProvider: SignupRunnerScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.HOME,
            concreteComponentProvider: HomeRunnerScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.SPLASH,
            concreteComponentProvider: SplashScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.TUTORIAL,
            concreteComponentProvider: TutorialScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.SIGN_IN,
            concreteComponentProvider: SigninScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RECOVERY,
            concreteComponentProvider: PasswordRecoveryScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RESET,
            concreteComponentProvider: PasswordResetScreenContainer,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.DRAWER,
            concreteComponentProvider: DrawerScreenContainer,
        }
    ];

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••

    // ••• render methods •••
    const renderWithinProviders = (child: any) => {
        return (
            <ReduxStoreProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <DropDownAlertContextProvider>
                        <LoadingContextProvider>
                            {child}
                        </LoadingContextProvider>
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
                () => (props: PropsWithChildren<any>) => renderWithinProviders(
                    <component.concreteComponentProvider {...props} />),
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
                }
            }
        });
        Navigation.setRoot(MAIN_FLOW);
    });


    return null;
};


export default SetupNavigation;
