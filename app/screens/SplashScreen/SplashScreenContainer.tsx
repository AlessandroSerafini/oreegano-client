import React from 'react';
import SplashScreenView from './SplashScreenView';
import TutorialScreenContainer from '../TutorialScreen/TutorialScreenContainer';

interface Props {}

const SplashScreenContainer = (props) => {
  return <SplashScreenView {...props} />;
};

SplashScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default SplashScreenContainer;
