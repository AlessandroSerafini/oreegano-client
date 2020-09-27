import React, {ComponentProps} from 'react';
import OrderConfirmScreenView from "./OrderConfirmScreenView";

interface Props extends ComponentProps<any>{
}

const OrderConfirmScreenContainer = ({...restProps}:Props) => {
    return <OrderConfirmScreenView {...restProps}/>;
};

export default OrderConfirmScreenContainer;
