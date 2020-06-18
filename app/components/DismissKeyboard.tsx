import React from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
  isModal?: boolean;
  children: React.ReactChild;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const DismissKeyboard = ({isModal = false, children}: Props) => {
  // ••• local variables •••

  // ••• navigation variables •••

  // ••• state variables & methods •••

  // ••• refs variables •••

  // ••• working methods •••

  // ••• render methods •••

  // ••• useSelector methods •••

  // ••• useEffect methods •••

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
