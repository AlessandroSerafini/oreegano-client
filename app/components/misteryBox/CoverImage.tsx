import React from 'react';
import {ImageBackground, StyleSheet, ViewStyle,} from 'react-native';
import Text from "../Text";
import {MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import {COLORS, SIZES} from "../../data/ThemeConstants";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    box: MisteryBox;
    style?: ViewStyle;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const CoverImage = ({box, style}: Props) => {
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
            source={{uri: box.imageUrl}}
            style={[{
                borderRadius: SIZES.BORDER_RADIUS,
                overflow: "hidden",
                backgroundColor: COLORS.LIGHT_GREY,
                height: 150
            }, style]}>
            {box.available <= 3 && (
                <Text s style={{
                    position: "absolute",
                    top: SIZES.DEFAULT_PADDING,
                    left: SIZES.DEFAULT_PADDING,
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: box.available === 0 ? COLORS.GREY : COLORS.DULL_ORANGE,
                    paddingHorizontal: SIZES.DEFAULT_PADDING / 1.5,
                    color: "#FFF"
                }}>{`${box.available === 0 ? "Sold out" : box.available + " rimanenti"}`}</Text>
            )}
        </ImageBackground>
    );
};

export default CoverImage;
