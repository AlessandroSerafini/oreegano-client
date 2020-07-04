import React from 'react';
import SignupCustomerAddressScreenView from './SignupCustomerAddressScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props {
}

const SignupCustomerAddressScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SignupCustomerAddressScreenView {...props}/>;
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
