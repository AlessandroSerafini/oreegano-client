import React from 'react';
import HomeDeliveryScreenView from './HomeDeliveryScreenView';

interface Props {
}

const HomeDeliveryScreenContainer = () => {
    return <HomeDeliveryScreenView/>;
};

HomeDeliveryScreenContainer.options = {
    topBar: {
        title: {
            text: 'Home delivery',
        },
    },
};

export default HomeDeliveryScreenContainer;
