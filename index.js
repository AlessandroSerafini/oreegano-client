import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './app/config/store';
import {DropDownAlertContextProvider} from './app/providers/DropdownAlertProvider';
import SplashScreenContainer from './app/screens/SplashScreen/SplashScreenContainer';
import SignupScreenContainer from './app/screens/SignupScreen/SignupScreenContainer';
import {PersistGate} from 'redux-persist/integration/react';
import TutorialScreenContainer from './app/screens/TutorialScreen/TutorialScreenContainer';
import TopBarBackground from './app/components/TopBarBackground';
import DismissKeyboard from './app/components/DismissKeyboard';
import {TOP_BAR, NAVIGATION_COMPONENTS} from './app/data/CommonNavigation';
import HomeScreenContainer from "./app/screens/HomeScreen/HomeScreenContainer";
import PasswordRecoveryScreenContainer from "./app/screens/PasswordRecoveryScreen/PasswordRecoveryScreenContainer";

const {Navigation} = require('react-native-navigation');
const React = require('react');

const mainFlow = {
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

const renderApp = (child) => {
  return (
    <ReduxStoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DropDownAlertContextProvider>
          <DismissKeyboard>{child}</DismissKeyboard>
        </DropDownAlertContextProvider>
      </PersistGate>
    </ReduxStoreProvider>
  );
};

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.SPLASH,
  () => (props) => renderApp(<SplashScreenContainer {...props} />),
  () => SplashScreenContainer,
);

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.TUTORIAL,
  () => (props) => renderApp(<TutorialScreenContainer {...props} />),
  () => TutorialScreenContainer,
);

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.TOP_BAR_BACKGROUND,
  () => (props) => renderApp(<TopBarBackground {...props} />),
  () => TopBarBackground,
);

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.SIGN_UP,
  () => (props) => renderApp(<SignupScreenContainer {...props} />),
  () => SignupScreenContainer,
);

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.HOME,
  () => (props) => renderApp(<HomeScreenContainer {...props} />),
  () => HomeScreenContainer,
);

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.PASSWORD_RECOVERY,
  () => (props) => renderApp(<PasswordRecoveryScreenContainer {...props} />),
  () => PasswordRecoveryScreenContainer,
);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    statusBar: {
      /*backgroundColor: '#4d089a'*/
    },
    topBar: TOP_BAR
    /*bottomTab: {
            fontSize: 14,
                  selectedFontSize: 14
        },*/
  });
  Navigation.setRoot(mainFlow);
});
