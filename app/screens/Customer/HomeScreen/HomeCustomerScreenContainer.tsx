import React, {ComponentProps} from 'react';
import HomeCustomerScreenView from './HomeCustomerScreenView';

interface Props extends ComponentProps<any>{
}

const HomeCustomerScreenContainer = ({...restProps}:Props) => {
    return <HomeCustomerScreenView {...restProps}/>;
};

export default HomeCustomerScreenContainer;
