import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSignupErrorMessage, signUp} from '../../context/auth/authActions';
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
import {NAVIGATION_COMPONENTS} from "../../data/CommonNavigation";
import DismissKeyboard from "../../components/DismissKeyboard";
import {SignupState} from "../../context/auth/signupReducer";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupScreenView = (props) => {
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
    const [name, setName] = React.useState<InputState>(INITIAL_INPUT_STATE);
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
        ({signupReducer}: { signupReducer: SignupState }) => {
            return signupReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !pending &&
            !!name.text &&
            name.status !== "danger" &&
            !!email.text &&
            email.status !== "danger" &&
            !!password.text &&
            password.status !== "danger";
    };
    const handleSignup = (): void => {
        dispatch(
            signUp({
                type: 1,
                name: name.text,
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
                    dispatch(clearSignupErrorMessage());
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
                            <Block center>
                                <Block row>
                                    <Text>Hai già un account?</Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={{marginLeft: 8}}
                                        onPress={() => {
                                            Navigation.push(props.componentId, {
                                                component: {
                                                    name: NAVIGATION_COMPONENTS.SIGN_IN
                                                }
                                            });
                                        }}>
                                        <Text bold underline color={COLORS.DARK_SAGE}>
                                            Accedi
                                        </Text>
                                    </TouchableOpacity>
                                </Block>
                            </Block>
                            <NewLine multiplier={2}/>
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
                                        s
                                        color={COLORS.GREY}
                                        style={{backgroundColor: '#FFF', paddingHorizontal: 22}}>
                                        Oppure inserisci le credenziali
                                    </Text>
                                </Block>
                            </Block>
                            <NewLine multiplier={2}/>
                            <TextInput
                                disabled={pending}
                                placeholder="Nome"
                                inputState={name}
                                onChangeText={(text) => {
                                    setName({status: 'success', text});
                                }}
                            />
                            <NewLine multiplier={1.333}/>
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
                                title={'Registrati'}
                                onPress={() => {
                                    handleSignup();
                                }}
                            />
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

export default SignupScreenView;
