import React, {ComponentProps} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import Block from '../../../components/Block';
import {SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import Button from "../../../components/Button";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({});

const BoxDetailScreenView = ({...restProps}: Props) => {
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
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Block style={{paddingHorizontal: SIZES.DEFAULT_PADDING}}>
                    <Text>Ciaoone</Text>
                </Block>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BoxDetailScreenView;
