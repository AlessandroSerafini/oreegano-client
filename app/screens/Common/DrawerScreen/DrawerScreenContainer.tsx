import React, {ComponentProps} from 'react';
import DrawerScreenView from './DrawerScreenView';

interface Props extends ComponentProps<any>{

}

const DrawerScreenContainer = ({...restProps}:Props) => {
  return <DrawerScreenView {...restProps} />;
};

export default DrawerScreenContainer;
