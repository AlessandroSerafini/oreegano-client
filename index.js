import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './app/config/store';
import {DropDownAlertContextProvider} from './app/providers/DropdownAlertProvider';
import SplashScreenContainer from './app/screens/SplashScreen/SplashScreenContainer';
import SignupScreenContainer from './app/screens/SignupScreen/SignupScreenContainer';
import {PersistGate} from 'redux-persist/integration/react';
import TutorialScreenContainer from './app/screens/TutorialScreen/TutorialScreenContainer';
import TopBarBackground from './app/components/TopBarBackground';
import DismissKeyboard from './app/components/DismissKeyboard';
import {COLORS, FONT_FAMILIES} from './app/data/ThemeConstants';

const {Navigation} = require('react-native-navigation');
const React = require('react');

export const NAVIGATION_COMPONENTS = {
  MAIN: 'Main',
  TUTORIAL: 'Tutorial',
  SIGN_UP: 'Signup',
  TOP_BAR_BACKGROUND: 'TopBarBackground',
};
const mainFlow = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: NAVIGATION_COMPONENTS.MAIN,
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
  NAVIGATION_COMPONENTS.MAIN,
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

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    statusBar: {
      /*backgroundColor: '#4d089a'*/
    },
    topBar: {
      visible: true,
      animate: true,
      drawBehind: false,
      noBorder: true,
      background: {
        color: '#f2f3ee',
        component: {name: NAVIGATION_COMPONENTS.TOP_BAR_BACKGROUND},
      },
      largeTitle: {
        visible: true,
        fontSize: 10,
        color: COLORS.DARK,
        fontFamily: FONT_FAMILIES.BOLD,
      },
      title: {
        color: COLORS.DARK,
        fontFamily: FONT_FAMILIES.BOLD,
      },
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
