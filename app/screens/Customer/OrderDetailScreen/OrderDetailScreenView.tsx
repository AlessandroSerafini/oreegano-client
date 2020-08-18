import React, {ComponentProps} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import Block from '../../../components/Block';

interface Props extends ComponentProps<any>{
}

const styles = StyleSheet.create({

});

const OrderDetailScreenView = ({...restProps}:Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••

    return (
        <Block>
            <Text>Ciaoone</Text>
        </Block>
    );
};

export default OrderDetailScreenView;
