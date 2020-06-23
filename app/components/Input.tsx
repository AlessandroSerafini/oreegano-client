import React, {FunctionComponent} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps,} from 'react-native';
import {COLORS, FONT_SIZES, InputState, SIZES} from '../data/ThemeConstants';

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 1,
        borderRadius: SIZES.BORDER_RADIUS,
        fontSize: FONT_SIZES.P,
        paddingHorizontal: SIZES.DEFAULT_PADDING,
    },
});

interface Props extends TextInputProps {
    inputState: InputState;
    disabled?: boolean;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onEndEditing?: () => void;
}

const TextInput: FunctionComponent<Props> = ({
                                                 placeholder,
                                                 inputState,
                                                 disabled = false,
                                                 onChangeText,
                                                 onEndEditing,
                                                 ...restProps
                                             }) => {

    let inputStyles;
    switch (inputState.status) {
        case "basic":
        case "success":
            inputStyles = {borderColor: COLORS.PALE_GREY,}
            break;
        case "danger":
            inputStyles = {borderColor: COLORS.DANGER_RED,}
            break;
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
            value={inputState.text}
        />
    );
};

export default TextInput;
