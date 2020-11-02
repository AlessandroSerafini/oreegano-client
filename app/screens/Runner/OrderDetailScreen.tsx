import React, {ComponentProps, useEffect} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {DropdownAlertContext, useDropDown,} from '../../providers/DropdownAlertProvider';
import Block from '../../components/Block';
import {BUTTON_SIZES, COLORS, FLOATING_BUTTON_OFFSET, FONT_SIZES, SIZES,} from "../../data/ThemeConstants";
import NewLine from "../../components/NewLine";
import Button from "../../components/Button";
import NavIcon from "../../components/NavIcon";
import {Navigation} from "react-native-navigation";
import MapView from 'react-native-maps';
import {getBoxesByStore, MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import {joinOrder, Order} from "../../context/orders/ordersActions";
import {Marker} from 'react-native-maps';
import Text from "../../components/Text";
import {formatDistance, formatPrice} from "../../services/FormatService";
import DismissKeyboard from "../../components/DismissKeyboard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from "react-redux";
import {AuthState} from "../../context/auth/authReducer";
import {clearSignupErrorMessage} from "../../context/auth/authActions";
import {
    NAVIGATION_COMPONENTS_CUSTOMER,
    NAVIGATION_COMPONENTS_RUNNER,
    NAVIGATION_STACKS
} from "../../data/CommonNavigation";

interface Props extends ComponentProps<any> {
    order: Order;
}

const styles = StyleSheet.create({});

const OrderDetailScreen = ({order, ...restProps}: Props) => {
    // ••• local variables •••
    const {openDropDownAlert} = useDropDown();


    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••

    // ••• refs variables •••
    const mapRef = React.useRef(null)

    // ••• useSelector methods •••
    const {loginData} = useSelector(({authReducer}: { authReducer: AuthState }) => {
        return authReducer;
    });

    // ••• working methods •••

    // ••• render methods •••

    // ••• useEffect methods •••

    return (
        <>
            <MapView
                onMapReady={() => {
                    // @ts-ignore
                    mapRef.current.fitToCoordinates([{
                        latitude: order.storeLat,
                        longitude: order.storeLon
                    }, {
                        latitude: order.userLat,
                        longitude: order.userLon
                    }], {
                        edgePadding: {
                            top: -200,
                            left: 60,
                            right: 60,
                        }, animated: true
                    })

                }}
                showsUserLocation
                ref={mapRef}
                style={{width: "100%", height: "100%"}}
                initialRegion={{
                    latitude: order.storeLat,
                    longitude: order.storeLon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    key={0}
                    image={require('../../assets/images/map/shop.png')}
                    identifier={'mk1'}
                    coordinate={{
                        latitude: order.storeLat,
                        longitude: order.storeLon
                    }}
                    title={order.storeTitle}
                    description={order.storeAddress}
                />
                <Marker
                    key={1}
                    image={require('../../assets/images/map/home.png')}
                    identifier={'mk2'}
                    coordinate={{
                        latitude: order.userLat,
                        longitude: order.userLon
                    }}
                    title={order.userName}
                    description={order.userAddress}
                />
                <MapViewDirections
                    origin={{
                        latitude: order.storeLat,
                        longitude: order.storeLon
                    }}
                    destination={{
                        latitude: order.userLat,
                        longitude: order.userLon
                    }}
                    strokeWidth={4}
                    strokeColor={COLORS.GREYISH_GREEN}
                    apikey={"AIzaSyCtXVx75EHxx-dA4e2emWCuEyFVL_BgFQw"}
                />
            </MapView>
            <Block style={{
                paddingHorizontal: SIZES.DEFAULT_PADDING * 2,
                position: "absolute",
                width: "100%"
            }}>
                <SafeAreaView>
                    {/*<NavIcon style={{backgroundColor: "#FFF"}} name={"chevron-left"} callback={() => {
                    Navigation.pop(restProps.componentId);
                }}/>*/}
                    <NewLine multiplier={2}/>
                    <Text h2 bold>{`Ordine #${order.id}`}</Text>
                </SafeAreaView>
            </Block>
            <Block style={{
                paddingHorizontal: SIZES.DEFAULT_PADDING,
                position: "absolute",
                bottom: BUTTON_SIZES.FLOATING_BOTTOM_OFFSET,
                width: "100%",
            }}>
                <Block style={{
                    backgroundColor: "#FFF",
                    padding: SIZES.DEFAULT_PADDING * 2,
                    borderRadius: SIZES.BORDER_RADIUS * 3,
                    shadowColor: "#ccc",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                }}>
                    <Text h5 semiBold
                          ellipsizeMode="tail"
                          numberOfLines={2}>{order.boxTitle}</Text>
                    <NewLine multiplier={1}/>
                    <Block>
                        <Block row>
                            <Text semiBold color={COLORS.GREY}>Cliente: </Text>
                            <Text color={COLORS.GREY}>{order.userName}</Text>
                        </Block>
                        <Block row>
                            <Text semiBold color={COLORS.GREY}>Totale: </Text>
                            <Text color={COLORS.GREY}>{formatPrice(order.boxPrice)}</Text>
                        </Block>
                    </Block>
                    <NewLine multiplier={2}/>
                    <Block row>
                        <Block row>
                            <Block style={{
                                backgroundColor: COLORS.GREYISH_GREEN_20,
                                marginRight: 10,
                                borderRadius: SIZES.BORDER_RADIUS,
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40
                            }}>
                                <Icon name="map-marker-outline"
                                      color={COLORS.GREYISH_GREEN}
                                      size={FONT_SIZES.H4}
                                />
                            </Block>
                            <Block>
                                <Text uppercase color={COLORS.DARK_GREY} size={FONT_SIZES.S}
                                      style={{marginTop: -5, marginBottom: -5}}>Partenza</Text>
                                <Text size={FONT_SIZES.S}>{`${order.storeAddress}`}</Text>
                            </Block>
                        </Block>
                    </Block>
                    <NewLine multiplier={1}/>
                    <Block row>
                        <Block row>
                            <Block style={{
                                backgroundColor: COLORS.GREYISH_GREEN_20,
                                marginRight: 10,
                                borderRadius: SIZES.BORDER_RADIUS,
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40
                            }}>
                                <Icon name="map-marker-outline"
                                      color={COLORS.GREYISH_GREEN}
                                      size={FONT_SIZES.H4}
                                />
                            </Block>
                            <Block>
                                <Text uppercase color={COLORS.DARK_GREY} size={FONT_SIZES.S}
                                      style={{marginTop: -5, marginBottom: -5}}>Destinazione</Text>
                                <Text
                                    size={FONT_SIZES.S}>{`${order.userAddress} ${order.userPostalCode} ${order.userCity}`}</Text>
                            </Block>
                        </Block>
                    </Block>
                    <NewLine multiplier={3}/>
                    <Button
                        title={'Prendi in carico'}
                        onPress={async() => {
                            try {
                                if(!loginData) return;
                                await joinOrder(order.id, loginData.user.id);
                                Navigation.setStackRoot(NAVIGATION_STACKS.CENTER, {
                                    component: {
                                        name: NAVIGATION_COMPONENTS_RUNNER.ORDER_IN_TRANSIT,
                                        passProps: {
                                            idOrder: order.id
                                        }
                                    },
                                });
                            } catch (e) {
                                openDropDownAlert({
                                    type: 'error',
                                    title: 'Error',
                                    message: e,
                                    callback: () => {
                                    },
                                });
                            }
                        }}
                    />
                </Block>
            </Block>
        </>
    );
};

export default OrderDetailScreen;
