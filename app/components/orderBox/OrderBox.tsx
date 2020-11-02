import React, {ComponentProps} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';
import Block from "../Block";
import Text from "../Text";
import {COLORS, FONT_SIZES, SIZES} from "../../data/ThemeConstants";
import NewLine from "../NewLine";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDistance, formatPrice} from "../../services/FormatService";
import moment from "moment";
import {Navigation} from "react-native-navigation";
import {NAVIGATION_COMPONENTS_CUSTOMER, NAVIGATION_COMPONENTS_RUNNER} from "../../data/CommonNavigation";
import {Order} from "../../context/orders/ordersActions";
import CoverImage from "../CoverImage";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props extends ComponentProps<any> {
    order?: Order;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const OrderItem = ({order, componentId, ...restProps}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••

    // ••• useSelector methods •••

    // ••• useEffect methods •••


    return order
        ? (
            <TouchableOpacity activeOpacity={0.7}
                              onPress={() => {
                                  Navigation.push(componentId, {
                                      component: {
                                          name: NAVIGATION_COMPONENTS_RUNNER.ORDER_DETAIL,
                                          passProps: {
                                              order
                                          }
                                      }
                                  });

                              }}
                              style={{
                                  width: Dimensions.get('window').width - (SIZES.DEFAULT_PADDING * 2) - 100,
                              }}>
                <CoverImage imageUrl={order.boxImageUrl}/>
                <NewLine multiplier={0.5}/>
                <Text medium
                      p
                      ellipsizeMode="tail"
                      numberOfLines={2}>{order.boxTitle}</Text>
                <Text regular
                      uppercase
                      s
                      color={COLORS.DARK_GREY}
                      ellipsizeMode="tail"
                      numberOfLines={2}>{order.storeTitle}</Text>
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
                                  color={COLORS.DARK_GREY}>{formatDistance(order.distance)}</Text>
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
                                    {moment(order.date).format("DD/MM HH:mm")}
                                </Text>
                            </>
                        </Block>
                    </Block>
                </Block>
            </TouchableOpacity>
        )
        : null;
};

export default OrderItem;
