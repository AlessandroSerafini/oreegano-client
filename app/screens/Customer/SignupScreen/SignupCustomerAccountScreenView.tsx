import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {UserRoles} from '../../../context/auth/authActions';
import {AuthState} from '../../../context/auth/authReducer';
import Text from '../../../components/Text';
import {DropdownAlertContext,} from '../../../providers/DropdownAlertProvider';
import {COLORS, SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import {Navigation} from "react-native-navigation";
import {
    NAVIGATION_COMPONENTS_COMMON,
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_DELIVERY
} from "../../../data/CommonNavigation";
import DismissKeyboard from "../../../components/DismissKeyboard";
import SignupForm from "../../../components/SignupForm";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupCustomerAccountScreenView = (props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••
    const [isComponentFocused, setComponentFocused] = React.useState<boolean>(true);

    // ••• refs variables •••

    // ••• useSelector methods •••
    const {loginData} = useSelector(
        ({authReducer}: { authReducer: AuthState }) => {
            return authReducer;
        },
    );

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••

    useEffect(() => {
        if(isComponentFocused) {
            if (loginData) {
                Navigation.push(props.componentId, {
                    component: {
                        name: NAVIGATION_COMPONENTS_CUSTOMER.SIGN_UP_ADDRESS,
                    }
                });
            }
        }

        const listener = {
            componentDidAppear: () => {
                setComponentFocused(true);
            },
            componentDidDisappear: () => {
                setComponentFocused(false);
            }
        };
        // Register the listener to all events related to our component
        const unsubscribe = Navigation.events().registerComponentListener(listener, props.componentId);
        return () => {
            // Make sure to unregister the listener during cleanup
            unsubscribe.remove();
        };
    }, [loginData]);

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block
                    style={{
                        height: '100%',
                        paddingHorizontal: SIZES.DEFAULT_PADDING,
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
                                            name: NAVIGATION_COMPONENTS_COMMON.SIGN_IN
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
                    <SignupForm role={UserRoles.CUSTOMER} />
                    <NewLine multiplier={2}/>
                    <Block center>
                        <Block row>
                            <Text>Sei un corriere?</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{marginLeft: 8}}
                                onPress={() => {
                                    Navigation.push(props.componentId, {
                                        component: {
                                            name: NAVIGATION_COMPONENTS_DELIVERY.SIGN_UP
                                        }
                                    });
                                }}>
                                <Text bold underline color={COLORS.DARK_SAGE}>
                                    Lavora con noi
                                </Text>
                            </TouchableOpacity>
                        </Block>
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
                    source={require('../../../assets/images/footer-image1.png')}
                    style={[styles.image, {}]}
                />
                <Image
                    source={require('../../../assets/images/footer-image2.png')}
                    style={[styles.image, {}]}
                />
            </Block>
        </DismissKeyboard>
    );
};

export default SignupCustomerAccountScreenView;
