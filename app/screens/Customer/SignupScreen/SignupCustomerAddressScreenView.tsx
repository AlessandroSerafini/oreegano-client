import React, {ComponentProps, useEffect} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../components/Button';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import {INITIAL_INPUT_STATE, InputState, SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import TextInput from '../../../components/Input';
import {hasNumber, validateNum} from "../../../services/validationService";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER} from "../../../data/CommonNavigation";
import DismissKeyboard from "../../../components/DismissKeyboard";
import {clearCreateAddressErrorMessage, createAddress} from "../../../context/addresses/addressesActions";
import {CreateAddressState} from "../../../context/addresses/createAddressReducer";
import {useLoading} from "../../../providers/LoadingProvider";
import Text from "../../../components/Text";

interface Props extends ComponentProps<any>{
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupCustomerAddressScreenView = ({...restProps}:Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();
    const {email, name, password} = restProps;

    // ••• navigation variables •••

    // ••• validation fields methods •••
    const validatePostalCodeInput = () => {
        if (
            postalCode.text &&
            (postalCode.text.length !== 5 || !validateNum(postalCode.text))
        ) {
            setPostalCode({
                ...postalCode,
                status: "danger",
            });
        }
    };
    const validateStateInput = () => {
        if (state.text && state.text.length !== 2) {
            setState({
                ...state,
                status: "danger",
            });
        }
    };

    // ••• state variables & methods •••
    const [address, setAddress] = React.useState<InputState>(INITIAL_INPUT_STATE);
    const [postalCode, setPostalCode] = React.useState<InputState>(INITIAL_INPUT_STATE);
    const [city, setCity] = React.useState<InputState>(INITIAL_INPUT_STATE);
    const [state, setState] = React.useState<InputState>(INITIAL_INPUT_STATE);

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {pending, errorMessage, address: newAddress} = useSelector(
        ({createAddressReducer}: { createAddressReducer: CreateAddressState }) => {
            return createAddressReducer;
        },
    );

    // ••• working methods •••
    const canIProceed = (): boolean => {
        return !pending &&
            !!address.text &&
            address.status !== "danger" &&
            !!postalCode.text &&
            postalCode.status !== "danger" &&
            !!city.text &&
            city.status !== "danger" &&
            !!state.text &&
            state.status !== "danger";
    };
    const handleSignup = (): void => {
        dispatch(
            createAddress({
                address: address.text,
                postalCode: postalCode.text,
                city: city.text,
                state: state.text,
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
    useEffect(() => {
        if (postalCode.text) {
            validatePostalCodeInput();
        }
    }, [postalCode.text]);
    useEffect(() => {
        if (state.text) {
            validateStateInput();
        }
    }, [state.text]);

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block
                    style={{
                        paddingHorizontal: SIZES.DEFAULT_PADDING,
                    }}>
                    <NewLine multiplier={3}/>
                    <Text bold
                          h1>Completa il profilo</Text>
                    <NewLine multiplier={2}/>
                    <TextInput
                        disabled={pending}
                        placeholder="Indirizzo"
                        inputState={address}
                        onChangeText={(text) => {
                            setAddress({status: 'success', text});
                        }}
                    />
                    <NewLine multiplier={1.333}/>
                    <TextInput
                        disabled={pending}
                        placeholder="CAP"
                        maxLength={5}
                        inputState={postalCode}
                        onChangeText={(text) => {
                            if (!text || validateNum(text)) {
                                setPostalCode({status: 'success', text});
                            }
                        }}
                    />
                    <NewLine multiplier={1.333}/>
                    <TextInput
                        disabled={pending}
                        placeholder="Città"
                        inputState={city}
                        onChangeText={(text) => {
                            setCity({status: 'success', text});
                        }}
                    />
                    <NewLine multiplier={1.333}/>
                    <TextInput
                        disabled={pending}
                        placeholder="Provincia"
                        maxLength={2}
                        autoCapitalize='characters'
                        inputState={state}
                        onChangeText={(text) => {
                            if (!hasNumber(text)) {
                                setState({status: 'success', text});
                            }
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
            </SafeAreaView>
        </DismissKeyboard>
    );
};

export default SignupCustomerAddressScreenView;
