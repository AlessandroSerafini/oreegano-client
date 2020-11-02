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
import OrderDetailScreenCustomer from "../screens/Customer/OrderDetailScreen";
import OrderDetailScreenRunner from "../screens/Runner/OrderDetailScreen";
import SplashScreen from "../screens/Common/SplashScreen";
import TutorialScreen from "../screens/Common/TutorialScreen";
import SigninScreen from "../screens/Common/SigninScreen";
import PasswordRecoveryScreen from "../screens/Common/PasswordRecoveryScreen";
import PasswordResetScreen from "../screens/Common/PasswordResetScreen";
import SignupRunnerScreen from "../screens/Runner/SignupRunnerScreen";
import SignupCustomerAddressScreen
    from "../screens/Customer/SignupScreen/SignupCustomerAddressScreen";
import SignupCustomerAccountScreen
    from "../screens/Customer/SignupScreen/SignupCustomerAccountScreen";
import HomeCustomerScreen from "../screens/Customer/HomeCustomerScreen";
import HomeRunnerScreen from "../screens/Runner/HomeRunnerScreen";
import DrawerScreen from "../screens/Common/DrawerScreen";
import {LoadingContextProvider} from "../providers/LoadingProvider";
import BoxDetailScreen from "../screens/Customer/BoxDetailScreen";
import {PropsWithChildren} from "react";
import CheckoutScreen from "../screens/Customer/CheckoutScreen";
import {StatusBar} from "react-native";
import OrderConfirmScreen from "../screens/Customer/OrderConfirmScreen";
import OrderInTransitScreen from "../screens/Runner/OrderInTransitScreen";
import {LocationContextProvider} from "../providers/LocationProvider";

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
            concreteComponentProvider: SignupCustomerAccountScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ADDRESS,
            concreteComponentProvider: SignupCustomerAddressScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
            concreteComponentProvider: HomeCustomerScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.ORDER_DETAIL,
            concreteComponentProvider: OrderDetailScreenCustomer,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.CHECKOUT,
            concreteComponentProvider: CheckoutScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.ORDER_CONFIRM,
            concreteComponentProvider: OrderConfirmScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.ORDER_IN_TRANSIT,
            concreteComponentProvider: OrderInTransitScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_CUSTOMER.BOX_DETAIL,
            concreteComponentProvider: BoxDetailScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.SIGN_UP,
            concreteComponentProvider: SignupRunnerScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.ORDER_DETAIL,
            concreteComponentProvider: OrderDetailScreenRunner,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.SIGN_UP,
            concreteComponentProvider: SignupRunnerScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_RUNNER.HOME,
            concreteComponentProvider: HomeRunnerScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.SPLASH,
            concreteComponentProvider: SplashScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.TUTORIAL,
            concreteComponentProvider: TutorialScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.SIGN_IN,
            concreteComponentProvider: SigninScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RECOVERY,
            concreteComponentProvider: PasswordRecoveryScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RESET,
            concreteComponentProvider: PasswordResetScreen,
        },
        {
            name: NAVIGATION_COMPONENTS_COMMON.DRAWER,
            concreteComponentProvider: DrawerScreen,
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
                        <LocationContextProvider>
                            <LoadingContextProvider>
                                <>
                                    <StatusBar barStyle="dark-content"/>
                                    {child}
                                </>
                            </LoadingContextProvider>
                        </LocationContextProvider>
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
                ...DEFAULT_TOP_BAR, ...{}
            }
        });
        Navigation.setRoot(MAIN_FLOW);
    });


    return null;
};


export default SetupNavigation;
