import React, {FunctionComponent} from 'react';
import {
    Dimensions,
    StyleSheet,
    TextInput as RNTextInput,
    TextInputProps,
    TouchableOpacity,
    View,
    ViewProps,
} from 'react-native';
import {COLORS, FONT_SIZES, SIZES} from '../data/ThemeConstants';
import Text from "./Text";
import Block from "./Block";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER} from "../data/CommonNavigation";

const styles = StyleSheet.create({
    input: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.GREYISH_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

interface Props extends ViewProps {
    label: string;
    value: string;
    selected?: boolean;
    callback: (value: string) => void;
}

const Radio: FunctionComponent<Props> = ({
                                             label,
                                             value,
                                             selected = false,
                                             callback,
                                             ...restProps
                                         }) => {

    let radioStyles = {};
    return (
        <>
            {/*<RNTextInput
            {...restProps}
            editable={!disabled}
            placeholder={placeholder}
            style={[styles.input, radioStyles]}
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
        />*/}
                <TouchableOpacity activeOpacity={0.7}
                                  onPress={() => {
                                      callback(value);
                                  }}>
                    <Block row>
                        <View
                            {...restProps}
                            style={[styles.input, radioStyles]}>
                            {
                                selected ?
                                    <View style={{
                                        height: 12,
                                        width: 12,
                                        borderRadius: 6,
                                        backgroundColor: COLORS.GREYISH_GREEN,
                                    }}/>
                                    : null
                            }
                        </View>
                        <Text style={{marginLeft: 8}}>{label}</Text>
                    </Block>
                </TouchableOpacity>
        </>
    );
};

export default Radio;
