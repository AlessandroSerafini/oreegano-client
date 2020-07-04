import React from 'react';
import {
    Dimensions,
    FlatList,
    ImageBackground,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {MisteryBox} from "../context/misteryBoxes/misteryBoxesActions";
import Block from "./Block";
import {Store} from "../context/stores/storesActions";
import Text from "./Text";
import {COLORS, FONT_SIZES, SIZES} from "../data/ThemeConstants";
import {MisteryBoxEl} from "./MisteryBoxesList";
import LinearGradient from 'react-native-linear-gradient';
import NewLine from "./NewLine";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDistance, formatPrice} from "../services/FormatService";
import moment from "moment";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    misteryBoxEl?: MisteryBoxEl;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const MisteryBoxItem = ({misteryBoxEl}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••

    return misteryBoxEl
        ? (
            <Block width={Dimensions.get('window').width - (SIZES.DEFAULT_PADDING * 2) - 100}>
                <ImageBackground
                    source={{uri: misteryBoxEl?.misteryBox.imageUrl}}
                    style={{
                        borderRadius: SIZES.BORDER_RADIUS,
                        overflow: "hidden",
                        height: 150
                    }}>
                    <LinearGradient
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "60%",
                        }}
                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}/>
                    <Text bold
                          h5
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          color={"#FFF"}
                          style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              paddingBottom: SIZES.DEFAULT_PADDING,
                              paddingHorizontal: SIZES.DEFAULT_PADDING,
                          }}>{misteryBoxEl?.misteryBox.title}</Text>
                </ImageBackground>
                <NewLine multiplier={0.5}/>
                <Block>
                    <NewLine multiplier={0.3}/>
                    {misteryBoxEl?.store.distance && (
                        <Block row middle>
                            <Icon name="map-marker-circle"
                                  style={{marginRight: 5}}
                                  color={COLORS.DARK_GREY}
                                  size={FONT_SIZES.P + 5}
                            />
                            <Text size={FONT_SIZES.S} color={COLORS.DARK_GREY}>{formatDistance(misteryBoxEl?.store.distance)}</Text>
                        </Block>
                    )}
                    <NewLine multiplier={0.3}/>
                    <Block row style={{justifyContent: "space-between"}}>
                        <Block row middle>
                            <Icon name="clock-outline"
                                  style={{marginRight: 5}}
                                  color={COLORS.DARK_GREY}
                                  size={FONT_SIZES.P + 5}
                            />
                            <Text size={FONT_SIZES.S} color={COLORS.DARK_GREY}>{`Dalle ${moment(misteryBoxEl.misteryBox.date).format("HH:mm")}`}</Text>
                        </Block>
                        <Block row>
                            {misteryBoxEl?.misteryBox.oldPrice && (
                                <Text color={COLORS.DARK_GREY}
                                      style={{
                                          marginRight: 10,
                                          textDecorationLine: 'line-through'
                                      }}>{formatPrice(misteryBoxEl?.misteryBox.oldPrice)}</Text>
                            )}
                            <Text bold>{formatPrice(misteryBoxEl?.misteryBox.price)}</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        )
        : null;
};

export default MisteryBoxItem;
