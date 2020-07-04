import React from 'react';
import SignupDeliveryScreenView from './SignupDeliveryScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props {
}

const SignupDeliveryScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SignupDeliveryScreenView {...props}/>;
};

SignupDeliveryScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Registrazione corriere',
            },
        }
    },
};

export default SignupDeliveryScreenContainer;
