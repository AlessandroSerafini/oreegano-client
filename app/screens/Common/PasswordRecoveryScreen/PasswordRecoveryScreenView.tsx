import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from "react-native-navigation";
import {useDropDown} from "../../../providers/DropdownAlertProvider";
import {SIZES} from "../../../data/ThemeConstants";
import {PasswordRecoveryState} from "../../../context/passwordRecovery/passwordRecoveryReducer";
import {
    clearRecoveryPasswordErrorMessage,
    recoveryPassword,
    resetPasswordRecovery
} from "../../../context/passwordRecovery/passwordActions";
import DismissKeyboard from "../../../components/DismissKeyboard";
import Block from "../../../components/Block";
import NewLine from "../../../components/NewLine";
import TextInput from "../../../components/Input";
import Button from "../../../components/Button";
import Text from '../../../components/Text';
import {useLoading} from "../../../providers/LoadingProvider";
import Title from "../../../components/Title";
import * as Yup from "yup";
import {Formik, FormikValues} from "formik";

interface Props extends ComponentProps<any>{
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const PasswordRecoveryScreenView = ({...restProps}:Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• form variables •••
    const initialValues = {
        email: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    });

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, isComplete, errorMessage} = useSelector(
        ({passwordRecoveryReducer}: { passwordRecoveryReducer: PasswordRecoveryState }) => {
            return passwordRecoveryReducer;
        },
    );

    // ••• working methods •••
    const handlePasswordRecovery = (values: FormikValues): void => {
        dispatch(
            recoveryPassword(values.email),
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
                    message: `Un'email è stata inviata al tuo indirizzo email. Per reimpostare la password, segui le istruzioni riportate nell'email.`,
                    callback: () => {
                        dispatch(resetPasswordRecovery);
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
                    <Title title={"Recupera password"} />
                    <Text>Inserisci l'indirizzo E-mail del tuo account.{`\n`}Riceverai una mail contenente un link
                        per
                        reimpostare la password.</Text>
                    <NewLine multiplier={2}/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {}}
                    >
                        {({touched, errors, isValid, handleChange, handleBlur, handleSubmit, values}) => (
                            <>
                                <TextInput
                                    placeholder="E-mail"
                                    autoCapitalize="none"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <NewLine multiplier={2}/>
                                <Button
                                    disabled={!(values.email && isValid && !pending)}
                                    title={'Recupera password'}
                                    onPress={() => handlePasswordRecovery(values)}
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

export default PasswordRecoveryScreenView;
