import React from 'react';
import {Image, Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle,} from 'react-native';
import Text from "./Text";
import NewLine from "./NewLine";
import Block from "./Block";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {COLORS, FONT_SIZES, SIZES} from "../data/ThemeConstants";
import {signOut} from "../context/auth/authActions";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    name: string;
    callback?: any;
    style?: ViewStyle;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const NavIcon = ({name, callback, style}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[{
                borderWidth: 1,
                borderColor: COLORS.LIGHT_GREY,
                borderRadius: SIZES.BORDER_RADIUS,
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
            }, style]}
            onPress={() => {
                if (callback) {
                    callback();
                }

            }}>
            <Icon name={name}
                  size={FONT_SIZES.H2}
            />
        </TouchableOpacity>
    );
};

export default NavIcon;
