import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrorMessage, signUp} from '../../context/auth/authActions';
import {AuthState} from '../../context/auth/authReducer';
import {
  DropdownAlertContext,
  useDropDown,
} from '../../providers/DropdownAlertProvider';

interface Props {}

const styles = StyleSheet.create({});

const TutorialScreenView = ({}: Props) => {
  // ••• local variables •••

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• useSelector methods •••

  // ••• working methods •••

  // ••• render methods •••

  // ••• useEffect methods •••

  // TODO: DISEGNARE IL TUTORIAL
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>TutorialScreenView</Text>
    </View>
  );
};

export default TutorialScreenView;
