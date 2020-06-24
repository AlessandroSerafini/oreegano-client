import React from 'react';
import PasswordResetScreenView from './PasswordResetScreenView';

interface Props {
}

const PasswordResetScreenContainer = (props) => {
    return <PasswordResetScreenView {...props}/>;
};

PasswordResetScreenContainer.options = {
    topBar: {
        title: {
            text: 'Reimposta password',
        },
    },
};

export default PasswordResetScreenContainer;
