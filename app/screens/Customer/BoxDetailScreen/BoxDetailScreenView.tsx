import React, {ComponentProps, useEffect} from 'react';
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../../components/Text';
import {DropdownAlertContext, useDropDown,} from '../../../providers/DropdownAlertProvider';
import Block from '../../../components/Block';
import {
    COLORS,
    FLOATING_BUTTON_OFFSET,
    FONT_SIZES,
    INITIAL_INPUT_STATE,
    InputState,
    SIZES,
} from "../../../data/ThemeConstants";
import NewLine from "../../../components/NewLine";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import {NAVIGATION_COMPONENTS_COMMON, NAVIGATION_COMPONENTS_CUSTOMER, openDrawer} from "../../../data/CommonNavigation";
import NavIcon from "../../../components/NavIcon";
import {Navigation} from "react-native-navigation";
import CoverImage from "../../../components/misteryBox/CoverImage";
import {
    clearGetNearBoxesErrorMessage,
    getBoxesByStore,
    MisteryBox
} from "../../../context/misteryBoxes/misteryBoxesActions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import {formatPrice} from "../../../services/FormatService";
import ReadMore from 'react-native-read-more-text';
import LinearGradient from 'react-native-linear-gradient';
import MisteryBoxItem from "../../../components/misteryBox/MisteryBox";
import MisteryBoxesList from "../../../components/misteryBox/MisteryBoxesList";

interface Props extends ComponentProps<any> {
}

const styles = StyleSheet.create({});

const BoxDetailScreenView = ({...restProps}: Props) => {
    // ••• local variables •••
    const dispatch = useDispatch();
    const box: MisteryBox = restProps.box;
    const {openDropDownAlert} = useDropDown();

    // ••• navigation variables •••

    // ••• validation fields methods •••

    // ••• state variables & methods •••
    const [isReadMoreDescriptionOpen, setReadMoreDescriptionOpen] = React.useState<boolean>(false);
    const [relatedBoxes, setRelatedBoxes] = React.useState<MisteryBox[]>([]);

    // ••• refs variables •••

    // ••• useSelector methods •••

    // ••• working methods •••

    // ••• render methods •••
    const renderTruncatedFooter = (handlePress: any) => {
        return (
            <>
                <NewLine multiplier={1}/>
                <Button
                    title={'Leggi di più'}
                    outline
                    small
                    onPress={() => {
                        handlePress();
                        setReadMoreDescriptionOpen(true);
                    }}
                />
            </>
        );
    }
    const renderRevealedFooter = (handlePress: any) => {
        return (
            <>
                <NewLine multiplier={1}/>
                <Button
                    title={'Mostra meno'}
                    outline
                    small
                    onPress={() => {
                        handlePress();
                        setReadMoreDescriptionOpen(false);
                    }}
                />
            </>
        );
    }

    // ••• useEffect methods •••
    useEffect(() => {
        (async () => {
            try {
                setRelatedBoxes(await getBoxesByStore(box.store.id));
            } catch (e) {
                openDropDownAlert({
                    type: 'error',
                    title: 'Error',
                    message: e
                });
            }
        })();
    }, []);
    useEffect(() => {
    }, [relatedBoxes]);


    return (
        <>
            <ScrollView>
                <Block style={{
                    paddingHorizontal: SIZES.DEFAULT_PADDING,
                    paddingBottom: box.available > 0 ? FLOATING_BUTTON_OFFSET : 0,
                }}>
                    <NewLine multiplier={3}/>
                    <NavIcon name={"chevron-left"} callback={() => {
                        Navigation.pop(restProps.componentId);
                    }}/>
                    <NewLine multiplier={2}/>
                    <CoverImage box={restProps.box}
                                style={{height: 230}}/>
                    <NewLine multiplier={2}/>
                    <Text h3 semiBold numberOfLines={2}>{box.title}</Text>
                    <NewLine multiplier={1}/>
                    <Text h5>{box.store.title}</Text>
                    <NewLine multiplier={1}/>
                    <Block row middle style={{justifyContent: "space-between"}}>
                        <Block row middle>
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
                    <NewLine multiplier={4}/>
                    <Text h4 semiBold
                          style={{width: "75%"}}>{`Cosa ${box.available > 0 ? "posso" : "avrei potuto"} trovare all’interno?`}</Text>
                    <NewLine multiplier={1}/>
                    <Block>
                        <ReadMore
                            numberOfLines={3}
                            renderTruncatedFooter={renderTruncatedFooter}
                            renderRevealedFooter={renderRevealedFooter}>
                            <Text>
                                {box.description}
                            </Text>
                        </ReadMore>
                        {!isReadMoreDescriptionOpen && (
                            <LinearGradient style={{
                                width: "100%",
                                height: 100,
                                bottom: SIZES.DEFAULT_PADDING * 3,
                                position: "absolute"
                            }} colors={['#FFFFFF00', '#FFFFFF']}/>
                        )}
                    </Block>
                    <NewLine multiplier={4}/>
                    <Text h4 semiBold
                          style={{width: "75%"}}>{box.available > 0 ? "Da dove partirà la mia mistery box?" : "Dove si trovava la mistery box?"}</Text>
                    <Block row middle style={{justifyContent: "space-between"}}>
                        <Text color={COLORS.GREY}>{box.store.address.replace(/\\n/g, '\n')}</Text>
                        <Image
                            source={require('../../../assets/images/mappa.jpg')}
                            resizeMode={"contain"}
                            style={{
                                marginRight: -SIZES.DEFAULT_PADDING,
                                borderBottomLeftRadius: SIZES.BORDER_RADIUS,
                                borderTopLeftRadius: SIZES.BORDER_RADIUS
                            }}
                        />
                    </Block>
                    <NewLine multiplier={4}/>
                    <MisteryBoxesList title={`Altre box di "${box.store.title}"`} boxes={relatedBoxes} {...restProps}/>
                </Block>
            </ScrollView>
            {box.available > 0 && (
                <Button
                    title={'Prenota la tua box'}
                    floating
                    onPress={() => {

                    }}
                />
            )}
        </>
    );
};

export default BoxDetailScreenView;
