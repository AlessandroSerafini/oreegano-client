import React from 'react';
import SigninScreenView from './SigninScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props {
}

const SigninScreenContainer = (props) => {
    Navigation.mergeOptions(props.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SigninScreenView {...props}/>;
};

SigninScreenContainer.options = {
    topBar: {
        ...SCREEN_TOP_BAR, ...{
            title: {
                text: 'Accedi',
            },
        }
    },
};

export default SigninScreenContainer;
