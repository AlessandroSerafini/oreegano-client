import React, {ComponentProps} from 'react';
import SignupCustomerAddressScreenView from './SignupCustomerAddressScreenView';
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const SignupCustomerAddressScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SignupCustomerAddressScreenView {...restProps}/>;
};

export default SignupCustomerAddressScreenContainer;
