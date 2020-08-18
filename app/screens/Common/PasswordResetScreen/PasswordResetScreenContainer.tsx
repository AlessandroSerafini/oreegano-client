import React, {ComponentProps} from 'react';
import PasswordResetScreenView from './PasswordResetScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const PasswordResetScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <PasswordResetScreenView {...restProps}/>;
};

PasswordResetScreenContainer.options = {
    topBar: {
        title: {
            text: 'Reimposta password',
        },
    },
};

export default PasswordResetScreenContainer;
