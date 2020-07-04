import React from 'react';
import DrawerScreenView from './DrawerScreenView';

interface Props {}

const DrawerScreenContainer = (props) => {
  return <DrawerScreenView {...props} />;
};

DrawerScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default DrawerScreenContainer;
