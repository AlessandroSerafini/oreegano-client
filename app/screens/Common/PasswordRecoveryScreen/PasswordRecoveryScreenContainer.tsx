import React, {ComponentProps} from 'react';
import PasswordRecoveryScreenView from './PasswordRecoveryScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const PasswordRecoveryScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <PasswordRecoveryScreenView {...restProps}/>;
};

export default PasswordRecoveryScreenContainer;
