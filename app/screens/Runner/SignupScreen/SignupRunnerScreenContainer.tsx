import React, {ComponentProps} from 'react';
import SignupRunnerScreenView from './SignupRunnerScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any>{
}

const SignupRunnerScreenContainer = ({...restProps}:Props) => {
    Navigation.mergeOptions(restProps.componentId, {
        sideMenu: {
            left: {
                enabled: false
            }
        }
    });
    return <SignupRunnerScreenView {...restProps}/>;
};

export default RunnerSignupRunnerScreenContainer;
