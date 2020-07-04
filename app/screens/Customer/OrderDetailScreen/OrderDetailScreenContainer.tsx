import React from 'react';
import OrderDetailScreenView from './OrderDetailScreenView';

interface Props {
}

const OrderDetailScreenContainer = (props) => {
    return <OrderDetailScreenView {...props}/>;
};

OrderDetailScreenContainer.options = {
    topBar: {
        title: {
            text: 'Reimposta password',
        },
    },
};

export default OrderDetailScreenContainer;
