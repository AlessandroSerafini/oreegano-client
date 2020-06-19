import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrorMessage, signUp} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import {COLORS, INITIAL_INPUT_STATE, InputState, SIZES,} from '../../data/ThemeConstants';
import Block from '../../components/Block';
import NewLine from '../../components/NewLine';
import TextInput from '../../components/Input';
import {validateEmail} from "../../services/validationService";

interface Props {
}

const styles = StyleSheet.create({
});

const HomeScreenView = ({}: Props) => {
    // ••• local variables •••


    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••


    // ••• refs variables •••

    // ••• useSelector methods •••


    // ••• working methods •••


    // ••• render methods •••

    // ••• useEffect methods •••
    // TODO: TEMPORANEO: RIMUOVERE!!


    // TODO: IMPLEMENTARE LOADING AD ALTO LIVELLO COME LE DROPDOWN ALERT
    // TODO: IMPLEMENTARE CONTROLLO VALIDITA' EMAIL COME SU PASSE

    return (
        <>
            <SafeAreaView>

            </SafeAreaView>
        </>
    );
};

export default HomeScreenView;
