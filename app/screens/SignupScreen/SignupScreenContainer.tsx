import React from 'react';
import SignupScreenView from './SignupScreenView';

interface Props {
}

const SignupScreenContainer = (props) => {
    return <SignupScreenView {...props}/>;
};

SignupScreenContainer.options = {
    topBar: {
        title: {
            text: 'Registrati',
        },
    },
};

export default SignupScreenContainer;
