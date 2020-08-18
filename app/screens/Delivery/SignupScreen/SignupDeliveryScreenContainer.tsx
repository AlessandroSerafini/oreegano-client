import React, {ComponentProps} from 'react';
import SignupDeliveryScreenView from './SignupDeliveryScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const SignupDeliveryScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SignupDeliveryScreenView {...restProps}/>;
};

SignupDeliveryScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Nuovo runner',
            },
        }
    },
};

export default SignupDeliveryScreenContainer;
