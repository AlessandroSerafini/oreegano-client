import React from 'react';
import {Image, Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle,} from 'react-native';
import Text from "./Text";
import NewLine from "./NewLine";
import Block from "./Block";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {COLORS, FONT_SIZES, SIZES} from "../data/ThemeConstants";
import {signOut} from "../context/auth/authActions";
import NavIcon from "./NavIcon";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    title: string;
    showImage?: boolean;
    leftButtons?: any[];
    rightButtons?: any[];
    imageStyle?: ViewStyle;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const Title = ({title, showImage = false, leftButtons = [], rightButtons = [], imageStyle}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••

    return (
        <>
            <Block row middle style={{justifyContent: "space-between"}}>
                {showImage && (
                    <Image
                        source={require('../assets/images/ramo.png')}
                        resizeMode={"contain"}
                        style={[{
                            position: "absolute",
                            right: -40,
                            top: 30
                        }, imageStyle]}
                    />
                )}
                <Block row middle>
                    {leftButtons.length > 0 && (
                        <>
                            {leftButtons?.map((b: any) => (
                                <NavIcon style={{marginRight: SIZES.DEFAULT_PADDING}} name={b.name} callback={b.callback}/>
                            ))}
                        </>
                    )}
                    <Text bold h1>{title}</Text>
                </Block>
                {rightButtons.length > 0 && (
                    <Block row middle>
                        {rightButtons?.map((b: any) => (
                            <NavIcon style={{marginLeft: SIZES.DEFAULT_PADDING}} name={b.name} callback={b.callback}/>
                        ))}
                    </Block>
                )}
            </Block>
            <NewLine multiplier={3}/>
        </>
    );
};

export default Title;
