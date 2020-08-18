import React, {ComponentProps, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {useDropDown} from "../providers/DropdownAlertProvider";
import {validateEmail} from "../services/validationService";
import {INITIAL_INPUT_STATE, InputState} from "../data/ThemeConstants";
import {SignupState} from "../context/auth/signupReducer";
import {clearSignupErrorMessage, signUp, UserRoles} from "../context/auth/authActions";
import TextInput from "./Input";
import NewLine from "./NewLine";
import Button from "./Button";

interface Props extends ComponentProps<any>{
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
                role: role,
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
        if (email.text) {
            validateEmailInput();
        }
    }, [email.text]);


    return (
        <>
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
        </>
    );
};

export default SignupForm;
