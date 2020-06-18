import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './app/config/store';
import {DropDownAlertContextProvider} from './app/providers/DropdownAlertProvider';
import SplashScreenContainer from "./app/screens/SplashScreen/SplashScreenContainer";
import SignupScreenContainer from "./app/screens/SignupScreen/SignupScreenContainer";
import {PersistGate} from "redux-persist/integration/react";

const {Navigation} = require('react-native-navigation');
const React = require('react');


export const NAVIGATION_COMPONENTS = {
    MAIN: 'Main',
    SIGN_UP: 'Signup',
};
const mainFlow = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: NAVIGATION_COMPONENTS.MAIN
                    }
                }
            ]
        }
    }
};

const renderApp = (child) => {
    return (
        <ReduxStoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DropDownAlertContextProvider>
                    {child}
                </DropDownAlertContextProvider>
            </PersistGate>
        </ReduxStoreProvider>
    );
}

Navigation.registerComponent(
    NAVIGATION_COMPONENTS.MAIN,
    () => (props) => renderApp(<SplashScreenContainer {...props} />),
    () => SplashScreenContainer,
);

Navigation.registerComponent(
    NAVIGATION_COMPONENTS.SIGN_UP,
    () => (props) => renderApp(<SignupScreenContainer {...props} />),
    () => SignupScreenContainer,
);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
        statusBar: {
            /*backgroundColor: '#4d089a'*/
        },
        topBar: {
            visible: true,
            animate: true,
            drawBehind: false,
            background: {
                color: '#f2f3ee'
            },
            largeTitle: {visible: true}
            /*title: {
                      color: 'white'
                  },
                  backButton: {
                      color: 'white'
                  },
                  background: {
                      color: '#4d089a'
                  }*/
        },
        /*bottomTab: {
            fontSize: 14,
                  selectedFontSize: 14
        },*/
    });
    Navigation.setRoot(mainFlow);
});


