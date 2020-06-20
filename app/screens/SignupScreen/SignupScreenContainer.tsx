import React from 'react';
import SignupScreenView from './SignupScreenView';
import {SCREEN_TOP_BAR} from "../../data/CommonNavigation";

interface Props {
}

const SignupScreenContainer = (props) => {
    return <SignupScreenView {...props}/>;
};

SignupScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Registrati',
            },
        }
    },
};

export default SignupScreenContainer;
