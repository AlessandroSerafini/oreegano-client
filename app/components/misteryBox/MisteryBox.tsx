import React, {ComponentProps} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';
import {MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import Block from "../Block";
import Text from "../Text";
import {COLORS, FONT_SIZES, SIZES} from "../../data/ThemeConstants";
import NewLine from "../NewLine";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDistance, formatPrice} from "../../services/FormatService";
import moment from "moment";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER} from "../../data/CommonNavigation";
import CoverImage from "../CoverImage";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props extends ComponentProps<any> {
    box?: MisteryBox;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const MisteryBoxItem = ({box, componentId, ...restProps}: Props) => {
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
                                  Navigation.push(componentId, {
                                      component: {
                                          name: NAVIGATION_COMPONENTS_CUSTOMER.BOX_DETAIL,
                                          passProps: {
                                              box
                                          }
                                      }
                                  });

                              }}
                              style={{
                                  width: Dimensions.get('window').width - (SIZES.DEFAULT_PADDING * 2) - 100,
                                  opacity: box.available === 0 ? 0.4 : 1
                              }}>
                <CoverImage imageUrl={box.imageUrl} availability={box.available}/>
                <NewLine multiplier={0.5}/>
                <Text medium
                      p
                      ellipsizeMode="tail"
                      numberOfLines={2}>{box.title}</Text>
                <Text regular
                      uppercase
                      s
                      color={COLORS.DARK_GREY}
                      ellipsizeMode="tail"
                      numberOfLines={2}>{box.store.title}</Text>
                <NewLine multiplier={0.5}/>
                <Block>
                    <NewLine multiplier={0.3}/>
                    <Block row>
                        <Block row middle>
                            <Icon name="map-marker-outline"
                                  style={{marginRight: 5}}
                                  color={COLORS.DARK_GREY}
                                  size={FONT_SIZES.P}
                            />
                            <Text size={FONT_SIZES.S}
                                  regular
                                  color={COLORS.DARK_GREY}>{formatDistance(box.distance)}</Text>
                        </Block>
                        <Block row middle>
                            <>
                                <Text size={FONT_SIZES.S}
                                      regular
                                      style={{marginHorizontal: 10}}
                                      color={COLORS.DARK_GREY}>
                                    -
                                </Text>
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
                        </Block>
                    </Block>
                    <NewLine multiplier={0.3}/>
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
            </TouchableOpacity>
        )
        : null;
};

export default MisteryBoxItem;
