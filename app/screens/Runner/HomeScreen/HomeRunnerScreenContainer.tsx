import React, {ComponentProps} from 'react';
import HomeRunnerScreenView from './HomeRunnerScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import HomeCustomerScreenContainer from "../../Customer/HomeScreen/HomeCustomerScreenContainer";

interface Props extends ComponentProps<any>{
}

const HomeRunnerScreenContainer = () => {
    return <HomeRunnerScreenView/>;
};


export default HomeRunnerScreenContainer;
