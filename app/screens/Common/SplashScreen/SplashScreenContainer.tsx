import React, {ComponentProps} from 'react';
import SplashScreenView from './SplashScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{

}

const SplashScreenContainer = ({...restProps}:Props) => {
  Navigation.mergeOptions(restProps.componentId, {
    sideMenu: {
      left: {
        enabled: false
      }
    }
  });
  return <SplashScreenView {...restProps} />;
};

export default SplashScreenContainer;
