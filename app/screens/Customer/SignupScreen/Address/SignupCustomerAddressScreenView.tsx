import React, {ComponentProps, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../../components/Button';
import {useDropDown} from '../../../../providers/DropdownAlertProvider';
import {SIZES,} from '../../../../data/ThemeConstants';
import Block from '../../../../components/Block';
import NewLine from '../../../../components/NewLine';
import TextInput from '../../../../components/Input';
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER} from "../../../../data/CommonNavigation";
import DismissKeyboard from "../../../../components/DismissKeyboard";
import {clearCreateAddressErrorMessage, createAddress} from "../../../../context/addresses/addressesActions";
import {CreateAddressState} from "../../../../context/addresses/createAddressReducer";
import {useLoading} from "../../../../providers/LoadingProvider";
import Title from "../../../../components/Title";
import {Formik, FormikValues} from "formik";
import * as Yup from "yup";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupCustomerAddressScreenView = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• form variables •••
    const initialValues = {
        address: '',
        postalCode: '',
        city: '',
        state: '',
    };
    const validationSchema = Yup.object({
        address: Yup.string()
            .required('Required'),
        postalCode: Yup.string()
            .required('Required')
            .matches(/^[0-9]{5}$/, 'Invalid format'),
        city: Yup.string()
            .required('Required'),
        state: Yup.string()
            .required('Required')
            .min(2)
            .max(2),
    });

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, errorMessage, address: newAddress} = useSelector(
        ({createAddressReducer}: { createAddressReducer: CreateAddressState }) => {
            return createAddressReducer;
        },
    );

    // ••• working methods •••
    const handleSignup = (values: FormikValues): void => {
        dispatch(
            createAddress({
                address: values.address,
                postalCode: values.postalCode,
                city: values.city,
                state: values.state,
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
                    dispatch(clearCreateAddressErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        if (newAddress) {
            Navigation.setStackRoot(restProps.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS_CUSTOMER.HOME,
                },
            });
        }
    }, [newAddress]);
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
                    <Title title={"Completa il profilo"}/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {}}
                    >
                        {({touched, errors, isValid, handleChange, handleBlur, handleSubmit, values}) => (
                            <>
                                <TextInput
                                    disabled={pending}
                                    placeholder="Indirizzo"
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                    errors={errors.address}
                                    touched={touched.address}
                                />
                                <NewLine multiplier={1.333}/>
                                <TextInput
                                    disabled={pending}
                                    placeholder="CAP"
                                    maxLength={5}
                                    onChangeText={handleChange('postalCode')}
                                    onBlur={handleBlur('postalCode')}
                                    value={values.postalCode}
                                    errors={errors.postalCode}
                                    touched={touched.postalCode}
                                />
                                <NewLine multiplier={1.333}/>
                                <TextInput
                                    disabled={pending}
                                    placeholder="Città"
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                    errors={errors.city}
                                    touched={touched.city}
                                />
                                <NewLine multiplier={1.333}/>
                                <TextInput
                                    disabled={pending}
                                    placeholder="Provincia"
                                    maxLength={2}
                                    autoCapitalize='characters'
                                    onChangeText={handleChange('state')}
                                    onBlur={handleBlur('state')}
                                    value={values.state}
                                    errors={errors.state}
                                    touched={touched.state}
                                />
                                <NewLine multiplier={2}/>
                                <Button
                                    disabled={!(values.postalCode && values.address && values.city && values.state && isValid && !pending)}
                                    title={'Registrati'}
                                    onPress={() => handleSignup(values)}
                                />
                            </>
                        )}
                    </Formik>
                </Block>
            </SafeAreaView>
        </DismissKeyboard>
    );
};

export default SignupCustomerAddressScreenView;
