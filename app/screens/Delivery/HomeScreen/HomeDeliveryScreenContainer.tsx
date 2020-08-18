import React, {ComponentProps} from 'react';
import HomeDeliveryScreenView from './HomeDeliveryScreenView';

interface Props extends ComponentProps<any>{
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
