import React, {ComponentProps, useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity,} from 'react-native';
import {MisteryBox} from "../context/misteryBoxes/misteryBoxesActions";
import Block from "./Block";
import Text from "./Text";
import {COLORS, FONT_SIZES, SIZES} from "../data/ThemeConstants";
import LinearGradient from 'react-native-linear-gradient';
import NewLine from "./NewLine";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDistance, formatPrice} from "../services/FormatService";
import moment from "moment";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_COMPONENTS_RUNNER} from "../data/CommonNavigation";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props extends ComponentProps<any>{
    box?: MisteryBox;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const MisteryBoxItem = ({box, ...restProps}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••


    return box
        ? (
            <TouchableOpacity activeOpacity={0.7}
                              onPress={() => {
                                  Navigation.push(restProps.componentId, {
                                      component: {
                                          name: NAVIGATION_COMPONENTS_CUSTOMER.BOX_DETAIL,
                                      }
                                  });

                              }}
                              style={{
                                  width: Dimensions.get('window').width - (SIZES.DEFAULT_PADDING * 2) - 100,
                                  opacity: box.available === 0 ? 0.4 : 1
                              }}>
                <ImageBackground
                    source={{uri: box.imageUrl}}
                    style={{
                        borderRadius: SIZES.BORDER_RADIUS,
                        overflow: "hidden",
                        height: 150
                    }}>
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
                <NewLine multiplier={0.5}/>
                <Text medium
                      p
                      ellipsizeMode="tail"
                      numberOfLines={2}>{box.title}</Text>
                <NewLine multiplier={0.5}/>
                <Block>
                    <NewLine multiplier={0.3}/>
                    {box.distance && (
                        <Block row middle>
                            <Icon name="map-marker"
                                  style={{marginRight: 5}}
                                  color={COLORS.DARK_GREY}
                                  size={FONT_SIZES.P}
                            />
                            <Text size={FONT_SIZES.S}
                                  regular
                                  color={COLORS.DARK_GREY}>{formatDistance(box.distance)}</Text>
                        </Block>
                    )}
                    <NewLine multiplier={0.3}/>
                    <Block row style={{justifyContent: "space-between"}}>
                        <Block row middle>
                            {box.available > 0 && (
                                <>
                                    <Icon name="clock-outline"
                                          style={{marginRight: 5}}
                                          color={COLORS.DARK_GREY}
                                          size={FONT_SIZES.P}
                                    />
                                    <Text size={FONT_SIZES.S}
                                          regular
                                          color={COLORS.DARK_GREY}>
                                        {`Dalle ${moment(box.date).format("HH:mm")}`}
                                    </Text>
                                </>
                            )}
                        </Block>
                        <Block row>
                            {box.oldPrice && (
                                <Text color={COLORS.DARK_GREY}
                                      regular
                                      style={{
                                          marginRight: 10,
                                          textDecorationLine: 'line-through'
                                      }}>{formatPrice(box.oldPrice)}</Text>
                            )}
                            <Text bold>{formatPrice(box.price)}</Text>
                        </Block>
                    </Block>
                </Block>
            </TouchableOpacity>
        )
        : null;
};

export default MisteryBoxItem;
