import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../context/signup/signupActions';
import {SignupState} from '../../context/signup/signupReducer';
import { DropdownAlertContext, useDropDown } from '../../providers/DropdownAlertProvider';

interface Props {}

const styles = StyleSheet.create({});

const SignupScreenView = ({}: Props) => {
  // ••• local variables •••
  const dispatch = useDispatch();
  const { ref } = useDropDown()

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• useSelector methods •••
  const {pending, errorMessage} = useSelector(
    ({signupReducer}: {signupReducer: SignupState}) => {
      return signupReducer;
    },
  );

  // ••• working methods •••

  // ••• render methods •••

  // ••• useEffect methods •••
  useEffect(() => {
    dispatch(
      signUp({
        type: 1,
        name: 'Ale Serafini',
        email: 'sera-92@hotdmdsail.it',
        password: 'ciaoone',
      }),
    );
  }, []);
  useEffect(() => {
    if (errorMessage) {
      ref.current.alertWithType('error', 'Error', errorMessage);
    }
  }, [errorMessage]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>SignupScreenView</Text>
    </View>
  );
};

export default SignupScreenView;
