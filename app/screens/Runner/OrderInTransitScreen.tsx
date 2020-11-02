import React, {ComponentProps, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import Block from '../../components/Block';
import {COLORS, FONT_SIZES, SIZES} from "../../data/ThemeConstants";
import NewLine from "../../components/NewLine";
import Button from "../../components/Button";
import {Navigation} from "react-native-navigation";
import {
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER,
    NAVIGATION_STACKS
} from "../../data/CommonNavigation";
import LottieView from "lottie-react-native";
import Geolocation from "@react-native-community/geolocation";
import {environment} from "../../environment/environment";
import io from 'socket.io-client';
import {getOrderDetail, updateRunnerPosition} from "../../context/orders/ordersActions";

interface Props extends ComponentProps<any> {
    idOrder: number;
}

const styles = StyleSheet.create({});

const OrderInTransitScreen = ({idOrder, ...restProps}: Props) => {
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
    useEffect(() => {
        console.log("PASSO1");
        Geolocation.watchPosition(async (info) => {
            console.log("PASSO1.1");
            const {latitude, longitude} = info.coords;

            console.log("PASSO1.2", {latitude, longitude});

            await updateRunnerPosition(idOrder, {latitude, longitude});
        }, (error) => {
            console.log("PASSO1.3", {error});
        });
    }, []);
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <Block center middle flex width={300}>
                    <LottieView style={{
                        width: 350,
                        marginTop: -30,
                        marginBottom: -100
                    }} source={require('../../assets/lottie-files/in-transit.json')}
                                autoPlay
                                loop/>
                    <Text center h1 medium color={COLORS.GREYISH_GREEN}>Ben fatto!</Text>
                    <NewLine multiplier={1}/>
                    <Text center medium h5>Box presa in carico</Text>
                    <NewLine multiplier={1}/>
                    <Text center>Consegna la box al destinatario, riscuoti il pagamento e conferma premendo il
                        pulsante</Text>
                    <Text center semiBold>Consegna ordine!</Text>
                </Block>
            </SafeAreaView>
            <Button
                title={'Consegna ordine'}
                floating
                onPress={() => {
                    Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                        component: {
                            name: NAVIGATION_COMPONENTS_RUNNER.HOME,
                        },
                    });
                }}
            />
        </>
    );
};

export default OrderInTransitScreen;
