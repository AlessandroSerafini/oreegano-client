import React from 'react';
import TutorialScreenView from './TutorialScreenView';
import {Navigation} from "react-native-navigation";

interface Props {}

const TutorialScreenContainer = (props) => {
  Navigation.mergeOptions(props.componentId, {
    sideMenu: {
      left: {
        enabled: false
      }
    }
  });
  return <TutorialScreenView {...props} />;
};

TutorialScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default TutorialScreenContainer;
