import React from 'react';
import SplashScreenView from './SplashScreenView';
import {Navigation} from "react-native-navigation";

interface Props {}

const SplashScreenContainer = (props) => {
  Navigation.mergeOptions(props.componentId, {
    sideMenu: {
      left: {
        enabled: false
      }
    }
  });
  return <SplashScreenView {...props} />;
};

SplashScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default SplashScreenContainer;
