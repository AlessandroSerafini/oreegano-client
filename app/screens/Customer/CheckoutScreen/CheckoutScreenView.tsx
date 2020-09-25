import React, {ComponentProps} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import Block from '../../../components/Block';
import {COLORS, SIZES} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import Title from "../../../components/Title";
import {Navigation} from "react-native-navigation";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({});

const CheckoutScreenView = ({...restProps}: Props) => {
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
        <ScrollView>
            <Block style={{paddingHorizontal: SIZES.DEFAULT_PADDING}}>
                <NewLine multiplier={3}/>
                <Title title={"Checkout"}
                       leftButtons={[
                           {
                               name: "chevron-left",
                               callback: () => Navigation.pop(restProps.componentId)
                           }
                       ]}
                />
                <Block>
                    <Block
                        height={1}
                        fluid
                        style={{
                            borderTopWidth: 1,
                            borderTopColor: COLORS.LIGHT_GREY,
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            marginTop: 1,
                        }}
                    />
                    <Block center>
                        <Text
                            color={COLORS.GREY}
                            style={{backgroundColor: '#FFF', paddingHorizontal: 22}}>
                            Compila i dati per la spedizione
                        </Text>
                    </Block>
                </Block>
            </Block>
        </ScrollView>
    );
};

export default CheckoutScreenView;
