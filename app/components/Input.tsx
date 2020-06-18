import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  ButtonProps,
} from 'react-native';
import {COLORS, FONT_SIZES, SIZES} from '../data/ThemeConstants';

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.PALE_GREY,
    borderRadius: SIZES.BORDER_RADIUS,
    fontSize: FONT_SIZES.P,
    paddingHorizontal: SIZES.DEFAULT_PADDING,
  },
});

interface Props extends ButtonProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const TextInput: FunctionComponent<Props> = ({
  placeholder,
  value,
  onChangeText,
  ...restProps
}) => {
  return (
    <RNTextInput
      {...restProps}
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={COLORS.DARK}
      onChangeText={(text) => {
        if (onChangeText) {
          onChangeText(text);
        }
      }}
      value={value}
    />
  );
};

export default TextInput;
