import React, {ComponentProps} from 'react';
import HomeDeliveryScreenView from './HomeDeliveryScreenView';
import {SCREEN_TOP_BAR} from "../../../data/CommonNavigation";
import HomeCustomerScreenContainer from "../../Customer/HomeScreen/HomeCustomerScreenContainer";

interface Props extends ComponentProps<any>{
}

const HomeDeliveryScreenContainer = () => {
    return <HomeDeliveryScreenView/>;
};


export default HomeDeliveryScreenContainer;
