import React from 'react';
import TutorialScreenView from './TutorialScreenView';

interface Props {}

const TutorialScreenContainer = () => {
  return <TutorialScreenView />;
};

TutorialScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default TutorialScreenContainer;
