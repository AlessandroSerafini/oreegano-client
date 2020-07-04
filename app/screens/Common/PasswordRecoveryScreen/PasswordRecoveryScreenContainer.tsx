import React from 'react';
import PasswordRecoveryScreenView from './PasswordRecoveryScreenView';
import {Navigation} from "react-native-navigation";

interface Props {
}

const PasswordRecoveryScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <PasswordRecoveryScreenView {...props}/>;
};

PasswordRecoveryScreenContainer.options = {
    topBar: {
        title: {
            text: 'Recupera password',
        },
    },
};

export default PasswordRecoveryScreenContainer;
