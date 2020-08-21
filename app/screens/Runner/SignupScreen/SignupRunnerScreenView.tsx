import React, {ComponentProps, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserRoles} from '../../../context/auth/authActions';
import {DropdownAlertContext,} from '../../../providers/DropdownAlertProvider';
import {SIZES,} from '../../../data/ThemeConstants';
import Block from '../../../components/Block';
import NewLine from '../../../components/NewLine';
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_RUNNER} from "../../../data/CommonNavigation";
import DismissKeyboard from "../../../components/DismissKeyboard";
import SignupForm from "../../../components/SignupForm";
import {AuthState} from "../../../context/auth/authReducer";
import Text from "../../../components/Text";
import Title from "../../../components/Title";

interface Props extends ComponentProps<any>{
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
});

const SignupRunnerScreenView = ({...restProps}:Props) => {
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
            Navigation.setStackRoot(restProps.componentId, {
                component: {
                    name: NAVIGATION_COMPONENTS_RUNNER.HOME,
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
                            paddingHorizontal: SIZES.DEFAULT_PADDING,
                        }}>

                        <NewLine multiplier={3}/>
                        <Title title={"Nuovo runner"}
                               showImage
                               leftButtons={[
                                   {
                                       name: "chevron-left", callback: () => {
                                           Navigation.pop(restProps.componentId);
                                       }
                                   }
                               ]}
                               imageStyle={{top: -10}}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <NewLine multiplier={2}/>
                        <SignupForm role={UserRoles.RUNNER} />
                    </Block>
                </Block>
            </SafeAreaView>
        </DismissKeyboard>
    );
};

export default SignupRunnerScreenView;
