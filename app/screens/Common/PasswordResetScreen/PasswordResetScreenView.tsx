import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import {SIZES,} from '../../../data/ThemeConstants';
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
import {useLoading} from "../../../providers/LoadingProvider";
import * as Yup from "yup";
import {Formik, FormikValues} from "formik";
import Title from "../../../components/Title";

interface Props extends ComponentProps<any>{
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const PasswordResetScreenView = ({...restProps}:Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {token, email} = restProps;
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• form variables •••
    const initialValues = {
        password: '',
        confirmPassword: '',
    };
    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined])
            .required('Password confirm is required')
    });

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, isComplete, errorMessage} = useSelector(
        ({passwordResetReducer}: { passwordResetReducer: PasswordResetState }) => {
            return passwordResetReducer;
        },
    );

    // ••• working methods •••
    const handlePasswordReset = (values: FormikValues): void => {
        dispatch(
            resetPassword(values.password, token),
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
                    Navigation.dismissModal(restProps.componentId);
                },
            });
        }
    }, [isComplete]);
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
                    <Title title={"Reimposta la password"} />
                    <Text>Inserisci la nuova password per reimpostare le credenziali di accesso.</Text>
                    <NewLine multiplier={2}/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {}}
                    >
                        {({
                              touched,
                              errors,
                              isValid,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              values}) => (
                            <>
                                <TextInput
                                    placeholder="Nuova password"
                                    autoCapitalize="none"
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    errors={errors.password}
                                    touched={touched.password}
                                />
                                <NewLine multiplier={1.333}/>
                                <TextInput
                                    placeholder="Conferma password"
                                    autoCapitalize="none"
                                    secureTextEntry
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    errors={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                />
                                <NewLine multiplier={2}/>
                                <Button
                                    disabled={!(values.password && values.confirmPassword && isValid && !pending)}
                                    title={'Reimposta password'}
                                    onPress={() => handlePasswordReset(values)}
                                />
                            </>
                        )}
                    </Formik>
                </Block>
            </SafeAreaView>
        </DismissKeyboard>
    )
        ;
};

export default PasswordResetScreenView;
