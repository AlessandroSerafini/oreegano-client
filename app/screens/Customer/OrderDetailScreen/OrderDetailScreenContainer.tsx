import React, {ComponentProps} from 'react';
import OrderDetailScreenView from './OrderDetailScreenView';

interface Props extends ComponentProps<any>{
}

const OrderDetailScreenContainer = ({...restProps}:Props) => {
    return <OrderDetailScreenView {...restProps}/>;
};

export default OrderDetailScreenContainer;
