import React from 'react';
import PasswordRecoveryScreenView from './PasswordRecoveryScreenView';
import {NAVIGATION_COMPONENTS} from "../../data/CommonNavigation";

interface Props {
}

const PasswordRecoveryScreenContainer = (props) => {
    return <PasswordRecoveryScreenView {...props}/>;
};

PasswordRecoveryScreenContainer.options = {
    topBar: {
        title: {
            text: 'Recupera',
        },
    },
};

export default PasswordRecoveryScreenContainer;
