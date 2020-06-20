import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSignupErrorMessage} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import {INITIAL_INPUT_STATE, InputState, SIZES,} from '../../data/ThemeConstants';
import Block from '../../components/Block';
import NewLine from '../../components/NewLine';
import TextInput from '../../components/Input';
import {validateEmail} from "../../services/validationService";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const PasswordRecoveryScreenView = (props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();

    // ••• navigation variables •••

    // ••• validation fields methods •••
    const validateEmailInput = () => {
        if (email.text && !validateEmail(email.text)) {
            setEmail({
                ...email,
                status: "danger",
            });
        }
    };

    // ••• state variables & methods •••
    const [email, setEmail] = React.useState<InputState>(INITIAL_INPUT_STATE);

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, errorMessage, loginData} = useSelector(
        ({authReducer}: { authReducer: AuthState }) => {
            return authReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !!email.text && email.status !== "danger";
    };
    const handlePasswordRecovery = (): void => {
        /*dispatch(
            signUp({
                type: 1,
                name: name.text,
                email: email.text,
                password: password.text,
            }),
        );*/
    };

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        if (errorMessage) {
            openDropDownAlert({
                type: 'error',
                title: 'Error',
                message: errorMessage,
                callback: () => {
                    dispatch(clearSignupErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        if (loginData) {
            /*Navigation.setStackRoot(props.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS.HOME,
                },
            });*/
        }
    }, [loginData]);
    useEffect(() => {
        if (email.text) {
            validateEmailInput();
        }
    }, [email.text]);

    // TODO: IMPLEMENTARE LOADING AD ALTO LIVELLO COME LE DROPDOWN ALERT

    return (
            <SafeAreaView>
                <Block
                    style={{
                        paddingHorizontal: SIZES.DEFAULT_PADDING * 2,
                    }}>
                    <NewLine multiplier={3}/>
                    <Text>Inserisci la l'indirizzo E-mail del tuo account.{`\n`}Riceverai una mail contenente un link
                        per
                        reimpostare la password.</Text>
                    <NewLine multiplier={2}/>
                    <TextInput
                        placeholder="E-mail"
                        autoCapitalize="none"
                        inputState={email}
                        onChangeText={(text) => {
                            setEmail({status: 'success', text});
                        }}
                    />
                    <NewLine multiplier={2}/>
                    <Button
                        disabled={!canIProceed()}
                        title={'Recupera password'}
                        onPress={() => {
                            handlePasswordRecovery();
                        }}
                    />
                </Block>
            </SafeAreaView>
    )
        ;
};

export default PasswordRecoveryScreenView;
