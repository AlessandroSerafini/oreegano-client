import SignupScreenContainer from './app/screens/SignupScreen/SignupScreenContainer';
import HomeScreenContainer from './app/screens/HomeScreen/HomeScreenContainer';
import SettingsScreenContainer from './app/screens/SettingsScreen/SettingsScreenContainer';
import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './app/config/store';
import {DropDownAlertContextProvider} from './app/providers/DropdownAlertProvider';

const {Navigation} = require('react-native-navigation');
const React = require('react');

const NAVIGATION_COMPONENTS = {
  HOME: 'Home',
  SIGN_IN: 'Signin',
  SETTINGS: 'Settings',
};
const mainFlow = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: NAVIGATION_COMPONENTS.HOME,
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: NAVIGATION_COMPONENTS.SETTINGS,
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const signinFlow = {
  root: {
    component: {
      name: NAVIGATION_COMPONENTS.SIGN_IN,
    },
  },
};

Navigation.registerComponent(
  NAVIGATION_COMPONENTS.SIGN_IN,
  () => (props) => (
    <ReduxStoreProvider store={store}>
      <DropDownAlertContextProvider>
        <SignupScreenContainer {...props} />
      </DropDownAlertContextProvider>
    </ReduxStoreProvider>
  ),
  () => SignupScreenContainer,
);
Navigation.registerComponent(
  NAVIGATION_COMPONENTS.HOME,
  () => HomeScreenContainer,
);
Navigation.registerComponent(
  NAVIGATION_COMPONENTS.SETTINGS,
  () => SettingsScreenContainer,
);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    statusBar: {
      /*backgroundColor: '#4d089a'*/
    },
    topBar: {
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
    bottomTab: {
      /*fontSize: 14,
            selectedFontSize: 14*/
    },
  });

  await Navigation.setRoot(1 === 2 ? mainFlow : signinFlow);
});
