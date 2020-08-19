import React, {ComponentProps} from 'react';
import TutorialScreenView from './TutorialScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{

}

const TutorialScreenContainer = ({...restProps}:Props) => {
  Navigation.mergeOptions(restProps.componentId, {
    sideMenu: {
      left: {
        enabled: false
      }
    }
  });
  return <TutorialScreenView {...restProps} />;
};

export default TutorialScreenContainer;
