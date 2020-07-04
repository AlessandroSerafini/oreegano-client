import React from 'react';
import SignupCustomerAccountScreenView from './SignupCustomerAccountScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props {
}

const SignupCustomerAccountScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });

    return <SignupCustomerAccountScreenView {...props}/>;
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
