import React from 'react';
import SigninScreenView from './SigninScreenView';
import {SCREEN_TOP_BAR} from "../../data/CommonNavigation";

interface Props {
}

const SigninScreenContainer = (props) => {
    return <SigninScreenView {...props}/>;
};

SigninScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Accedi',
            },
        }
    },
};

export default SigninScreenContainer;
