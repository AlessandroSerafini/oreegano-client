import React, {ComponentProps} from 'react';
import SigninScreenView from './SigninScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const SigninScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SigninScreenView {...restProps}/>;
};

export default SigninScreenContainer;
