import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrorMessage, signUp} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import {
    DropdownAlertContext,
    useDropDown,
} from '../../providers/DropdownAlertProvider';

interface Props {
}

const styles = StyleSheet.create({});

const SignupScreenView = ({}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, errorMessage, loginData} = useSelector(
        ({authReducer}: { authReducer: AuthState }) => {
            return authReducer;
        },
    );

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••
    // TODO: TEMPORANEO: RIMUOVERE!!
    useEffect(() => {
        dispatch(
            signUp({
                type: 1,
                name: 'Ale Serafini',
                email: 'sera-92@11.it',
                password: 'ciaoone',
            }),
        );
    }, []);
    useEffect(() => {
        if (errorMessage) {
            openDropDownAlert({
                type: "error", title: "Error", message: errorMessage, callback: () => {
                    dispatch(clearErrorMessage())
                }
            })
        }
    }, [errorMessage]);
    useEffect(() => {
        if (loginData) {
            // INFO: SONO LOGGATO
            // TODO: IMPLEMENT BUSINESS LOGIC
        }
    }, [loginData]);

    // TODO: IMPLEMENTARE LOADING AD ALTO LIVELLO COME LE DROPDOWN ALERT

    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                paddingBottom: 1000,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>SignupScreenView</Text>
        </ScrollView>
    );
};

export default SignupScreenView;
