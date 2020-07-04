import React from 'react';
import PasswordResetScreenView from './PasswordResetScreenView';
import {Navigation} from "react-native-navigation";

interface Props {
}

const PasswordResetScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
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
