import React, {ComponentProps} from 'react';
import HomeCustomerScreenView from './HomeCustomerScreenView';
import SignupCustomerAccountScreenView from "../SignupScreen/SignupCustomerAccountScreenView";
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import SignupCustomerAccountScreenContainer from "../SignupScreen/SignupCustomerAccountScreenContainer";
import {FONT_FAMILIES} from "../../../data/ThemeConstants";

interface Props extends ComponentProps<any>{
}

const HomeCustomerScreenContainer = ({...restProps}:Props) => {
    return <HomeCustomerScreenView {...restProps}/>;
};

export default HomeCustomerScreenContainer;
