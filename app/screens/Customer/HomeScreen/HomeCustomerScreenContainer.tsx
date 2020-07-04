import React from 'react';
import HomeCustomerScreenView from './HomeCustomerScreenView';

interface Props {
}

const HomeCustomerScreenContainer = () => {
    return <HomeCustomerScreenView/>;
};

HomeCustomerScreenContainer.options = {
    topBar: {
        title: {
            text: 'Scopri',
        },
    },
};

export default HomeCustomerScreenContainer;
