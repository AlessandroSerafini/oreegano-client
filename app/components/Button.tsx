import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle,} from 'react-native';
import {COLORS, SIZES} from '../data/ThemeConstants';
import Text from './Text';

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.DARK,
        height: 60,
        borderRadius: SIZES.BORDER_RADIUS,
        justifyContent: 'center',
    },
});

interface Props extends TouchableOpacityProps {
    title: string;
    disabled?: boolean;
    style?: ViewStyle;
    onPress: () => void;
}

const Button: FunctionComponent<Props> = ({
                                              title,
                                              disabled,
                                              style,
                                              onPress,
                                              ...restProps
                                          }) => {
    return (
        <TouchableOpacity
            {...restProps}
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.button, {opacity: disabled ? 0.3 : 1}, style]}
            onPress={() => {
                onPress();
            }}>
            <Text center semiBold color={'#FFF'}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
