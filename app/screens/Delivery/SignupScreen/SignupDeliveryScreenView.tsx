import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserRoles} from '../../../context/auth/authActions';
import {DropdownAlertContext,} from '../../../providers/DropdownAlertProvider';
import {SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_DELIVERY} from "../../../data/CommonNavigation";
import DismissKeyboard from "../../../components/DismissKeyboard";
import SignupForm from "../../../components/SignupForm";
import {AuthState} from "../../../context/auth/authReducer";
import Text from "../../../components/Text";

interface Props {
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupDeliveryScreenView = (props) => {
    // ••• local variables •••
    const dispatch = useDispatch();

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

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••
    useEffect(() => {
        if (loginData) {
            Navigation.setStackRoot(props.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS_DELIVERY.HOME,
                },
            });
        }
    }, [loginData]);

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Block>
                    <Block
                        style={{
                            height: '100%',
                            paddingHorizontal: SIZES.DEFAULT_PADDING,
                        }}>
                        <NewLine multiplier={3}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <NewLine multiplier={2}/>
                        <SignupForm role={UserRoles.DELIVERY} />
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

export default SignupDeliveryScreenView;
