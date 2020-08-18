import React, {ComponentProps} from 'react';
import HomeCustomerScreenView from './HomeCustomerScreenView';
import SignupCustomerAccountScreenView from "../SignupScreen/SignupCustomerAccountScreenView";

interface Props extends ComponentProps<any>{
}

const HomeCustomerScreenContainer = ({...restProps}:Props) => {
    return <HomeCustomerScreenView {...restProps}/>;
};

HomeCustomerScreenContainer.options = {
    topBar: {
        title: {
            text: 'Scopri',
        },
    },
};

export default HomeCustomerScreenContainer;
