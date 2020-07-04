import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import {INITIAL_INPUT_STATE, InputState, SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import TextInput from '../../../components/Input';
import DismissKeyboard from "../../../components/DismissKeyboard";
import {Navigation} from "react-native-navigation";
import {
    clearResetPasswordErrorMessage,
    resetPassword,
    resetPasswordReset
} from "../../../context/passwordRecovery/passwordActions";
import {PasswordResetState} from "../../../context/passwordRecovery/passwordResetReducer";
import {signIn} from "../../../context/auth/authActions";
import {useLoading} from "../../../providers/LoadingProvider";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const PasswordResetScreenView = (props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {token, email} = props;
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• navigation variables •••

    // ••• validation fields methods •••
    const validatePasswordInput = () => {
        if (password.text) {
            if (password.text !== confirmPassword.text) {
                setPassword({
                    ...password,
                    status: "danger",
                });
            } else {
                setPassword({
                    ...password,
                    status: "success",
                });
            }
        }
    };

    // ••• state variables & methods •••
    const [password, setPassword] = React.useState<InputState>(INITIAL_INPUT_STATE);
    const [confirmPassword, setConfirmPassword] = React.useState<InputState>(INITIAL_INPUT_STATE);

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, isComplete, errorMessage} = useSelector(
        ({passwordResetReducer}: { passwordResetReducer: PasswordResetState }) => {
            return passwordResetReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !pending && !!password.text && password.status !== "danger";
    };
    const handlePasswordReset = (): void => {
        dispatch(
            resetPassword(password.text, token),
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
                    dispatch(clearResetPasswordErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        if (isComplete) {
            openDropDownAlert({
                type: 'success',
                time: 3000,
                title: 'Successo',
                message: `La password è stata aggiornata con successo.`,
                callback: () => {
                    dispatch(resetPasswordReset);
                    Navigation.dismissModal(props.componentId);
                    signIn({
                        email: email,
                        password: password.text,
                    });
                },
            });
        }
    }, [isComplete]);
    useEffect(() => {
        setLoadingVisibility(pending);
    }, [pending]);
    useEffect(() => {
        if (password.text) {
            validatePasswordInput();
        }
    }, [password.text, confirmPassword.text]);

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block
                    style={{
                        paddingHorizontal: SIZES.DEFAULT_PADDING,
                    }}>
                    <NewLine multiplier={3}/>
                    <Text>Reimposta la tua password, verrà effettuato l'accesso con i nuovi dati.</Text>
                    <NewLine multiplier={2}/>
                    <TextInput
                        placeholder="Nuova password"
                        autoCapitalize="none"
                        secureTextEntry
                        inputState={password}
                        onChangeText={(text) => {
                            setPassword({status: 'success', text});
                        }}
                    />
                    <NewLine multiplier={1.333}/>
                    <TextInput
                        placeholder="Conferma password"
                        autoCapitalize="none"
                        secureTextEntry
                        inputState={confirmPassword}
                        onChangeText={(text) => {
                            setConfirmPassword({status: 'success', text});
                        }}
                    />
                    <NewLine multiplier={2}/>
                    <Button
                        disabled={!canIProceed()}
                        title={'Reimposta password'}
                        onPress={() => {
                            handlePasswordReset();
                        }}
                    />
                </Block>
            </SafeAreaView>
        </DismissKeyboard>
    )
        ;
};

export default PasswordResetScreenView;
