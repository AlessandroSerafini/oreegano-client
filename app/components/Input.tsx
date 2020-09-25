import React, {FunctionComponent} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps,} from 'react-native';
import {COLORS, FONT_SIZES, SIZES} from '../data/ThemeConstants';

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 1,
        borderRadius: SIZES.BORDER_RADIUS,
        fontSize: FONT_SIZES.P,
        paddingHorizontal: SIZES.DEFAULT_PADDING,
        backgroundColor: "#FFF"
    },
});

interface Props extends TextInputProps {
    disabled?: boolean;
    placeholder?: string;
    errors?: string;
    touched?: boolean;
    onChangeText?: (text: string) => void;
    onEndEditing?: () => void;
}

const TextInput: FunctionComponent<Props> = ({
                                                 placeholder,
                                                 errors,
                                                 touched,
                                                 disabled = false,
                                                 onChangeText,
                                                 onEndEditing,
                                                 ...restProps
                                             }) => {

    let inputStyles = {borderColor: COLORS.PALE_GREY};
    if(errors && touched) {
        inputStyles = {borderColor: COLORS.DANGER_RED}
    }
    return (
        <RNTextInput
            {...restProps}
            editable={!disabled}
            placeholder={placeholder}
            style={[styles.input, inputStyles]}
            placeholderTextColor={COLORS.DARK}
            onChangeText={(text) => {
                if (onChangeText) {
                    onChangeText(text);
                }
            }}
            onEndEditing={(text) => {
                if (onEndEditing) {
                    onEndEditing();
                }
            }}
        />
    );
};

export default TextInput;
