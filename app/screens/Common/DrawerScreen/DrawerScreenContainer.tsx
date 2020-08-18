import React, {ComponentProps} from 'react';
import DrawerScreenView from './DrawerScreenView';

interface Props extends ComponentProps<any>{

}

const DrawerScreenContainer = ({...restProps}:Props) => {
  return <DrawerScreenView {...restProps} />;
};

DrawerScreenContainer.options = {
  topBar: {
    visible: false,
  },
};

export default DrawerScreenContainer;
