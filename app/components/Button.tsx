import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle,} from 'react-native';
import {BUTTON_SIZES, COLORS, FONT_SIZES, SIZES} from '../data/ThemeConstants';
import Text from './Text';
import Block from "./Block";
import NewLine from "./NewLine";

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
    },
    smallButton: {
        alignSelf: "center",
        paddingHorizontal: SIZES.DEFAULT_PADDING,
        paddingVertical: SIZES.DEFAULT_PADDING / 2
    },
    defaultButton: {
        borderRadius: 500,
        height: BUTTON_SIZES.HEIGHT,
        backgroundColor: COLORS.GREYISH_GREEN,
    },
    pulseButton: {
        borderRadius: 500,
        backgroundColor: COLORS.GREYISH_GREEN_50,
        paddingHorizontal: BUTTON_SIZES.FLOATING_INSET_OFFSET,
        paddingVertical: BUTTON_SIZES.FLOATING_INSET_OFFSET,
    },
    floatingButton: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    outlineButton: {
        borderRadius: SIZES.BORDER_RADIUS,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
    },
});

interface Props extends TouchableOpacityProps {
    title: string;
    disabled?: boolean;
    small?: boolean;
    floating?: boolean;
    outline?: boolean;
    style?: ViewStyle;
    onPress: () => void;
}

const Button: FunctionComponent<Props> = ({
                                              title,
                                              disabled,
                                              small = false,
                                              floating = false,
                                              outline = false,
                                              style,
                                              onPress,
                                              ...restProps
                                          }) => {

    // ••• render methods •••
    const renderButton = () => {
        return (
            <Block style={!outline ? styles.pulseButton : undefined}>
                <TouchableOpacity
                    {...restProps}
                    disabled={disabled}
                    activeOpacity={0.7}
                    style={[
                        styles.button,
                        outline ? styles.outlineButton : styles.defaultButton,
                        small ? styles.smallButton : undefined,
                        {opacity: disabled ? 0.3 : 1}, style]}
                    onPress={() => {
                        onPress();
                    }}>

                    <Text center
                          semiBold={!small}
                          size={small ? FONT_SIZES.S : undefined}
                          color={outline ? undefined : '#FFF'}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </Block>
        );
    }

    return (
        <>
            {floating ? (
                <Block style={{marginHorizontal: SIZES.DEFAULT_PADDING,}}>
                    <Block style={styles.floatingButton}>
                        {renderButton()}
                    </Block>
                </Block>
            ) : (
                <>{renderButton()}</>
            )}
        </>
    );
};

export default Button;
