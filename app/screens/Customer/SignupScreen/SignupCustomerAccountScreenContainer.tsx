import React, {ComponentProps} from 'react';
import SignupCustomerAccountScreenView from './SignupCustomerAccountScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
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

SignupCustomerAccountScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Registrati',
            },
        }
    },
};

export default SignupCustomerAccountScreenContainer;
