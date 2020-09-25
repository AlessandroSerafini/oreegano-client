import React, {ComponentProps} from 'react';
import BoxDetailScreenView from './BoxDetailScreenView';

interface Props extends ComponentProps<any> {
}

const BoxDetailScreenContainer = ({...restProps}: Props) => {
    return <BoxDetailScreenView {...restProps}/>;
};

export default BoxDetailScreenContainer;
