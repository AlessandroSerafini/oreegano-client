import React, {ComponentProps} from 'react';
import HomeRunnerScreenView from './HomeRunnerScreenView';

interface Props extends ComponentProps<any>{
}

const HomeRunnerScreenContainer = ({...restProps}:Props) => {
    return <HomeRunnerScreenView {...restProps}/>;
};


export default HomeRunnerScreenContainer;
