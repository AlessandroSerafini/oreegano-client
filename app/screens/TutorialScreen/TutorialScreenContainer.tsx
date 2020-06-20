import React from 'react';
import TutorialScreenView from './TutorialScreenView';

interface Props {}

const TutorialScreenContainer = (props) => {
  return <TutorialScreenView {...props} />;
};

TutorialScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default TutorialScreenContainer;
