import React, {ComponentProps, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {useDropDown} from "../providers/DropdownAlertProvider";
import {SignupState} from "../context/auth/signupReducer";
import {clearSignupErrorMessage, signUp, UserRoles} from "../context/auth/authActions";
import TextInput from "./Input";
import NewLine from "./NewLine";
import Button from "./Button";
import {Formik, FormikValues} from "formik";
import * as Yup from 'yup';

interface Props extends ComponentProps<any> {
    role: UserRoles,
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        height: '80%',
        width: '80%',
        maxHeight: 120,
        maxWidth: 120,
        resizeMode: 'contain',
    },
});

const SignupForm = ({role, ...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();

    // ••• form variables •••
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
    });

    // ••• navigation variables •••

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, errorMessage} = useSelector(
        ({signupReducer}: { signupReducer: SignupState }) => {
            return signupReducer;
        },
    );

    // ••• working methods •••
    const handleSignup = (values: FormikValues): void => {
        dispatch(
            signUp({
                role: role,
                name: values.name,
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
                    dispatch(clearSignupErrorMessage());
                },
            });
        }
    }, [errorMessage]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({touched, errors, isValid, handleChange, handleBlur, handleSubmit, values}) => (
                <>
                    <TextInput
                        disabled={pending}
                        placeholder="Nome"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        errors={errors.name}
                        touched={touched.name}
                    />
                    <NewLine multiplier={1.333}/>
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
                        disabled={!(values.password && values.email && values.name && isValid && !pending)}
                        title={'Registrati'}
                        onPress={() => handleSignup(values)}
                    />
                </>
            )}
        </Formik>
    );
};

export default SignupForm;
