import React, {ComponentProps, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSigninErrorMessage, signIn, UserRoles} from '../../../context/auth/authActions';
import {AuthState} from '../../../context/auth/authReducer';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import {COLORS, INITIAL_INPUT_STATE, InputState, SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import TextInput from '../../../components/Input';
import {validateEmail} from "../../../services/validationService";
import {Navigation} from "react-native-navigation";
import {
    MODAL_TOP_BAR,
    NAVIGATION_COMPONENTS_COMMON,
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER
} from "../../../data/CommonNavigation";
import DismissKeyboard from "../../../components/DismissKeyboard";
import {SigninState} from "../../../context/auth/signinReducer";
import {useLoading} from "../../../providers/LoadingProvider";
import Title from "../../../components/Title";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SigninScreenView = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

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
            Navigation.setStackRoot(restProps.componentId, {
                component: {
                    name: loginData.user.role === UserRoles.CUSTOMER
                        ? NAVIGATION_COMPONENTS_CUSTOMER.HOME
                        : NAVIGATION_COMPONENTS_RUNNER.HOME
                },
            });
        }
    }, [loginData]);
    useEffect(() => {
        setLoadingVisibility(pending);
    }, [pending]);
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
                        paddingHorizontal: SIZES.DEFAULT_PADDING,
                    }}>
                    <NewLine multiplier={3}/>
                    <Title title={"Accedi"}
                           showImage
                           imageStyle={{top: -10}}/>
                    <Block center>
                        <Block row>
                            <Text>Non hai un account?</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{marginLeft: 8}}
                                onPress={() => {
                                    Navigation.pop(restProps.componentId);
                                }}>
                                <Text bold underline color={COLORS.GREYISH_GREEN}>
                                    Registrati
                                </Text>
                            </TouchableOpacity>
                        </Block>
                        <NewLine multiplier={2}/>
                    </Block>
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
                                                    name: NAVIGATION_COMPONENTS_COMMON.PASSWORD_RECOVERY,
                                                    options: {
                                                        topBar: MODAL_TOP_BAR
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                });
                            }}>
                            <Text underline s color={COLORS.GREYISH_GREEN}>
                                Password dimenticata?
                            </Text>
                        </TouchableOpacity>
                    </Block>
                </Block>
            </SafeAreaView>
        </DismissKeyboard>
    );
};

export default SigninScreenView;
