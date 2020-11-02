import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSigninErrorMessage, signIn, UserRoles} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import {COLORS, SIZES,} from '../../data/ThemeConstants';
import Block from '../../components/Block';
import NewLine from '../../components/NewLine';
import TextInput from '../../components/Input';
import {Navigation} from "react-native-navigation";
import {
    MODAL_TOP_BAR,
    NAVIGATION_COMPONENTS_COMMON,
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER
} from "../../data/CommonNavigation";
import DismissKeyboard from "../../components/DismissKeyboard";
import {SigninState} from "../../context/auth/signinReducer";
import {useLoading} from "../../providers/LoadingProvider";
import Title from "../../components/Title";
import * as Yup from "yup";
import {Formik, FormikValues} from "formik";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SigninScreen = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• form variables •••
    const initialValues = {
        email: '',
        password: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

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
    const handleSignIn = (values: FormikValues): void => {
        dispatch(
            signIn({
                email: values.email,
                password: values.password,
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

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {}}
                    >
                        {({touched, errors, isValid, handleChange, handleBlur, handleSubmit, values}) => (
                            <>
                                <TextInput
                                disabled={pending}
                                placeholder="E-mail"
                                autoCapitalize="none"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                errors={errors.email}
                                touched={touched.email}
                            />
                                <NewLine multiplier={1.333}/>
                                <TextInput
                                    disabled={pending}
                                    secureTextEntry
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    errors={errors.password}
                                    touched={touched.password}
                                />
                                <NewLine multiplier={2}/>
                                <Button
                                    disabled={!(values.email && values.password && isValid && !pending)}
                                    title={'Accedi'}
                                    onPress={() => handleSignIn(values)}
                                />
                            </>
                        )}
                    </Formik>
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

export default SigninScreen;
