import React from 'react';
import HomeScreenView from './HomeScreenView';

interface Props {
}

const HomeScreenContainer = () => {
    return <HomeScreenView/>;
};

HomeScreenContainer.options = {
    topBar: {
        title: {
            text: 'Scopri',
        },
    },
};

export default HomeScreenContainer;
