import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSigninErrorMessage, signIn} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import {COLORS, INITIAL_INPUT_STATE, InputState, SIZES,} from '../../data/ThemeConstants';
import Block from '../../components/Block';
import NewLine from '../../components/NewLine';
import TextInput from '../../components/Input';
import {validateEmail} from "../../services/validationService";
import {Navigation} from "react-native-navigation";
import {MODAL_TOP_BAR, NAVIGATION_COMPONENTS} from "../../data/CommonNavigation";
import DismissKeyboard from "../../components/DismissKeyboard";
import {SignupState} from "../../context/auth/signupReducer";
import {SigninState} from "../../context/auth/signinReducer";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SigninScreenView = (props) => {
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
    const [password, setPassword] = React.useState<InputState>(
        INITIAL_INPUT_STATE,
    );

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {loginData} = useSelector(
        ({authReducer}: { authReducer: AuthState }) => {
            return authReducer;
        },
    );
    const {pending, errorMessage} = useSelector(
        ({signinReducer}: { signinReducer: SigninState }) => {
            return signinReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !pending &&
            !!email.text &&
            email.status !== "danger" &&
            !!password.text &&
            password.status !== "danger";
    };
    const handleSignIn = (): void => {
        dispatch(
            signIn({
                email: email.text,
                password: password.text,
            }),
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
                    dispatch(clearSigninErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        if (loginData) {
            Navigation.setStackRoot(props.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS.HOME,
                },
            });
        }
    }, [loginData]);
    useEffect(() => {
        if (email.text) {
            validateEmailInput();
        }
    }, [email.text]);

    // TODO: IMPLEMENTARE LOADING AD ALTO LIVELLO COME LE DROPDOWN ALERT

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block>
                    <Block
                        style={{
                            height: '100%',
                            paddingHorizontal: SIZES.DEFAULT_PADDING * 2,
                        }}>
                        <NewLine multiplier={3}/>
                        <TextInput
                            disabled={pending}
                            placeholder="E-mail"
                            autoCapitalize="none"
                            inputState={email}
                            onChangeText={(text) => {
                                setEmail({status: 'success', text});
                            }}
                        />
                        <NewLine multiplier={1.333}/>
                        <TextInput
                            disabled={pending}
                            secureTextEntry
                            placeholder="Password"
                            inputState={password}
                            onChangeText={(text) => {
                                setPassword({status: 'success', text});
                            }}
                        />
                        <NewLine multiplier={2}/>
                        <Button
                            disabled={!canIProceed()}
                            title={'Accedi'}
                            onPress={() => {
                                handleSignIn();
                            }}
                        />
                        <NewLine multiplier={2}/>
                        <Block center>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    Navigation.showModal({
                                        stack: {
                                            children: [
                                                {
                                                    component: {
                                                        name: NAVIGATION_COMPONENTS.PASSWORD_RECOVERY,
                                                        options: {
                                                            topBar: MODAL_TOP_BAR
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    });
                                }}>
                                <Text underline s color={COLORS.DARK_SAGE}>
                                    Password dimenticata?
                                </Text>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </Block>
            </SafeAreaView>
            <Block
                row
                fluid
                style={{
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'space-between',
                }}>
                <Image
                    source={require('../../assets/images/footer-image1.png')}
                    style={[styles.image, {}]}
                />
                <Image
                    source={require('../../assets/images/footer-image2.png')}
                    style={[styles.image, {}]}
                />
            </Block>
        </DismissKeyboard>
    );
};

export default SigninScreenView;
