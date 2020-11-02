import React, {ComponentProps, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import Block from '../../components/Block';
import {COLORS, FLOATING_BUTTON_OFFSET, SIZES} from "../../data/ThemeConstants";
import NewLine from "../../components/NewLine";
import Title from "../../components/Title";
import {Navigation} from "react-native-navigation";
import * as Yup from "yup";
import TextInput from "../../components/Input";
import Button from "../../components/Button";
import {Formik, FormikValues} from "formik";
import {AuthState} from "../../context/auth/authReducer";
import {NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_STACKS} from "../../data/CommonNavigation";
import Radio from "../../components/Radio";
import {SIGNUP_TYPES} from "../../context/auth/signupTypes";
import {signUp} from "../../context/auth/authActions";
import {clearCreateOrderErrorMessage, createOrder, resetCreateOrder} from "../../context/orders/ordersActions";
import {MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import {CreateAddressState} from "../../context/addresses/createAddressReducer";
import {CreateOrderState} from "../../context/orders/createOrderReducer";
import {useLoading} from "../../providers/LoadingProvider";
import moment from "moment";

interface Props extends ComponentProps<any> {
    box: MisteryBox;
}

const styles = StyleSheet.create({});

const CheckoutScreen = ({box, ...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const {openDropDownAlert} = useDropDown();
    const {setLoadingVisibility} = useLoading();

    // ••• useSelector methods •••
    const {loginData} = useSelector(({authReducer}: { authReducer: AuthState }) => {
        return authReducer;
    });
    const {pending, errorMessage, order} = useSelector(
        ({createOrderReducer}: { createOrderReducer: CreateOrderState }) => {
            return createOrderReducer;
        },
    );

    // ••• form variables •••
    const initialValues = loginData ? {...loginData.address, ...{payment: 'contrassegno'}} : {
        address: '',
        postalCode: '',
        city: '',
        state: '',
        payment: 'contrassegno'
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
        payment: Yup.string()
            .required('Required')
    });

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••
    const handleSubmit = (values: FormikValues): void => {
        if (!loginData) return;
        dispatch(
            createOrder({
                userName: loginData.user.name,
                userEmail: loginData.user.email,
                userAddress: values.address,
                userPostalCode: values.postalCode,
                userCity: values.city,
                userState: values.state,
                userLat: 0,
                userLon: 0,
                userId: loginData.user.id,
                date: moment().toISOString(true),
                boxTitle: box.title,
                boxDescription: box.description,
                boxImageUrl: box.imageUrl,
                boxPrice: box.price,
                boxOldPrice: box.oldPrice,
                storeTitle: box.store.title,
                storeLat: box.store.lat,
                storeLon: box.store.lon,
                storeAddress: box.store.address,
                storeDescription: box.store.description,
                storePhoneNumber: box.store.phoneNumber,
                paymentMethod: values.payment,
            }, box.id)
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
                    dispatch(clearCreateOrderErrorMessage());
                },
            });
        }
    }, [errorMessage]);
    useEffect(() => {
        setLoadingVisibility(pending);
    }, [pending]);
    useEffect(() => {
        if (order) {
            dispatch(resetCreateOrder());
            Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                component: {
                    name: NAVIGATION_COMPONENTS_CUSTOMER.ORDER_CONFIRM,
                    passProps: {
                        order
                    }
                },
            });
        }
    }, [order]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
            }}
        >
            {({touched, errors, isValid, handleChange, handleBlur, values}) => (
                <>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Block style={{
                            paddingHorizontal: SIZES.DEFAULT_PADDING,
                            paddingBottom: FLOATING_BUTTON_OFFSET,
                        }}>
                            <NewLine multiplier={3}/>
                            <Title title={"Checkout"}
                                   leftButtons={[
                                       {
                                           name: "chevron-left",
                                           callback: () => Navigation.pop(restProps.componentId)
                                       }
                                   ]}
                            />
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
                                        color={COLORS.GREY}
                                        style={{backgroundColor: '#FFF', paddingHorizontal: 22}}>
                                        Compila i dati per la spedizione
                                    </Text>
                                </Block>
                                <NewLine multiplier={1.333}/>
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
                                <NewLine multiplier={3}/>
                                <Text h3 semiBold>Pagamento</Text>
                                <NewLine multiplier={1}/>
                                <Radio selected={values.payment === "contrassegno"}
                                       label={"In contrassegno"}
                                       value={"contrassegno"}
                                       callback={(value) => {
                                       }}/>
                            </Block>
                        </Block>
                    </ScrollView>
                    <Button
                        title={'Conferma ordine'}
                        disabled={!(values.payment && values.state && values.city && values.address && values.postalCode && isValid && !pending)}
                        floating
                        onPress={() => handleSubmit(values)}
                    />
                </>
            )}
        </Formik>
    );
};

export default CheckoutScreen;
