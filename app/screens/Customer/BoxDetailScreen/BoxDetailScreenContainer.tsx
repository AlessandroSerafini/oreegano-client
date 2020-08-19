import React, {ComponentProps} from 'react';
import BoxDetailScreenView from './BoxDetailScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import SignupCustomerAccountScreenContainer from "../SignupScreen/SignupCustomerAccountScreenContainer";

interface Props extends ComponentProps<any> {
}

const BoxDetailScreenContainer = ({...restProps}: Props) => {
    return <BoxDetailScreenView {...restProps}/>;
};

export default BoxDetailScreenContainer;
