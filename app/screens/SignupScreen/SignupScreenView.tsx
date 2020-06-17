import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import {
  DropdownAlertContext,
  useDropDown,
} from '../../providers/DropdownAlertProvider';

interface Props {}

const styles = StyleSheet.create({});

const SignupScreenView = ({}: Props) => {
  // ••• local variables •••
  const dispatch = useDispatch();
  const {ref} = useDropDown();

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• useSelector methods •••
  const {pending, errorMessage, loginData} = useSelector(
    ({authReducer}: {authReducer: AuthState}) => {
      return authReducer;
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
        email: 'sera-92@hoddtddsddmdssdsadil.it',
        password: 'ciaoone',
      }),
    );
  }, []);
  useEffect(() => {
    if (errorMessage) {
      ref.current.alertWithType('error', 'Error', errorMessage);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (loginData) {
      // INFO: SONO LOGGATO
      console.log('passo', JSON.stringify(loginData, null, 2));
    }
  }, [loginData]);

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
