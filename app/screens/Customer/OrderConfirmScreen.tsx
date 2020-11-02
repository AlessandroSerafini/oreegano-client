import React, {ComponentProps} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import Block from '../../components/Block';
import {COLORS, FONT_SIZES, SIZES} from "../../data/ThemeConstants";
import NewLine from "../../components/NewLine";
import Button from "../../components/Button";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_STACKS} from "../../data/CommonNavigation";
import {MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import {Order} from "../../context/orders/ordersActions";

interface Props extends ComponentProps<any> {
    order: Order
}

const styles = StyleSheet.create({});

const OrderConfirmScreen = ({order, ...restProps}: Props) => {
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
        <>
            <SafeAreaView style={{flex: 1}}>
                <Block center middle flex width={300}>
                    <Image
                        source={require('../../assets/images/undraw/order-confirmed.png')}
                        style={{
                            width: 200,
                            height: 200,
                            marginTop: -40,
                            marginRight: -SIZES.DEFAULT_PADDING,
                            borderBottomLeftRadius: SIZES.BORDER_RADIUS,
                            borderTopLeftRadius: SIZES.BORDER_RADIUS
                        }}
                    />
                    <NewLine multiplier={2}/>
                    <Text center h1 medium color={COLORS.GREYISH_GREEN}>Grazie!</Text>
                    <NewLine multiplier={1}/>
                    <Text center medium h5>Ordine confermato</Text>
                    <NewLine multiplier={1}/>
                    <Text center>Il tuo ordine è stato preso in carico. Potrai monitorare la posizione della box non
                        appena un corriere prenderà in carico l'ordine.</Text>
                    <NewLine multiplier={1.5}/>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                                component: {
                                    name: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
                                },
                            });
                        }}>
                        <Text center medium color={COLORS.GREYISH_GREEN}>Torna alla home</Text>
                    </TouchableOpacity>
                </Block>
            </SafeAreaView>
            <Button
                title={'Dettaglio ordine'}
                floating
                onPress={() => {
                    Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                        component: {
                            name: NAVIGATION_COMPONENTS_CUSTOMER.ORDER_DETAIL,
                            passProps: {
                                idOrder: order.id
                            }
                        },
                    });
                }}
            />
        </>
    );
};

export default OrderConfirmScreen;
