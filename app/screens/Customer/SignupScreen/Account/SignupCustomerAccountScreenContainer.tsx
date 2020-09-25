import React, {ComponentProps} from 'react';
import SignupCustomerAccountScreenView from './SignupCustomerAccountScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const SignupCustomerAccountScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });

    return <SignupCustomerAccountScreenView {...restProps}/>;
};

export default SignupCustomerAccountScreenContainer;