import React, {ComponentProps} from 'react';
import CheckoutScreenView from './CheckoutScreenView';

interface Props extends ComponentProps<any>{
}

const CheckoutScreenContainer = ({...restProps}:Props) => {
    return <CheckoutScreenView {...restProps}/>;
};

export default CheckoutScreenContainer;
