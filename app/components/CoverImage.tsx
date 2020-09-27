import React from 'react';
import {ImageBackground, StyleSheet, ViewStyle,} from 'react-native';
import Text from "./Text";
import {MisteryBox} from "../context/misteryBoxes/misteryBoxesActions";
import {COLORS, SIZES} from "../data/ThemeConstants";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    imageUrl: string;
    availability?: number;
    style?: ViewStyle;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const CoverImage = ({imageUrl, availability = 100, style}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••

    return (
        <ImageBackground
            source={{uri: imageUrl}}
            style={[{
                borderRadius: SIZES.BORDER_RADIUS,
                overflow: "hidden",
                backgroundColor: COLORS.LIGHT_GREY,
                height: 150
            }, style]}>
            {availability <= 3 && (
                <Text s style={{
                    position: "absolute",
                    top: SIZES.DEFAULT_PADDING,
                    left: SIZES.DEFAULT_PADDING,
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: availability === 0 ? COLORS.GREY : COLORS.DULL_ORANGE,
                    paddingHorizontal: SIZES.DEFAULT_PADDING / 1.5,
                    color: "#FFF"
                }}>{`${availability === 0 ? "Sold out" : availability + " rimanenti"}`}</Text>
            )}
        </ImageBackground>
    );
};

export default CoverImage;
