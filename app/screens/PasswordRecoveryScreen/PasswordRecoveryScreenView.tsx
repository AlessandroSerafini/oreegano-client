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
import {
    clearRecoveryPasswordErrorMessage,
    recoveryPassword, resetPasswordRecovery
} from "../../context/passwordRecovery/passwordActions";
import {PasswordRecoveryState} from "../../context/passwordRecovery/passwordRecoveryReducer";
import DismissKeyboard from "../../components/DismissKeyboard";
import {Navigation} from "react-native-navigation";

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
    const {pending, isComplete, errorMessage} = useSelector(
        ({passwordRecoveryReducer}: { passwordRecoveryReducer: PasswordRecoveryState }) => {
            return passwordRecoveryReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !pending && !!email.text && email.status !== "danger";
    };
    const handlePasswordRecovery = (): void => {
        dispatch(
            recoveryPassword(email.text),
        );
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
                    dispatch(clearRecoveryPasswordErrorMessage());
                },
            });
        }
    }, [errorMessage]);

    useEffect(() => {
        if (isComplete) {
                openDropDownAlert({
                    type: 'success',
                    time: 6000,
                    title: 'Controlla la tua casella',
                    message: `Un'email è stata inviata al tuo indirizzo ${email.text}. Per reimpostare la password, segui le istruzioni riportate nell'email.`,
                    callback: () => {
                        dispatch(resetPasswordRecovery);
                        Navigation.dismissModal(props.componentId);
                    },
                });
        }
    }, [isComplete]);

    useEffect(() => {
        if (email.text) {
            validateEmailInput();
        }
    }, [email.text]);

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block
                    style={{
                        paddingHorizontal: SIZES.DEFAULT_PADDING * 2,
                    }}>
                    <NewLine multiplier={3}/>
                    <Text>Inserisci l'indirizzo E-mail del tuo account.{`\n`}Riceverai una mail contenente un link
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
        </DismissKeyboard>
    )
        ;
};

export default PasswordRecoveryScreenView;
