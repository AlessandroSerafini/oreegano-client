import React, {ComponentProps} from 'react';
import SignupCustomerAddressScreenView from './SignupCustomerAddressScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
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

SignupCustomerAddressScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Indirizzo',
            },
        }
    },
};

export default SignupCustomerAddressScreenContainer;
