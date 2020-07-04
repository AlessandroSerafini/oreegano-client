import React, {useEffect} from 'react';
import {FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View,} from 'react-native';
import {MisteryBox} from "../context/misteryBoxes/misteryBoxesActions";
import Block from "./Block";
import {Store} from "../context/stores/storesActions";
import Text from "./Text";
import MisteryBoxItem from "./MisteryBox";
import {INITIAL_INPUT_STATE, InputState, SIZES} from "../data/ThemeConstants";
import {store} from "../config/store";
import NewLine from "./NewLine";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props {
    stores: Store[];
    title?: string;
}

export interface MisteryBoxEl {
    misteryBox: MisteryBox;
    store: Store;
    distance?: number;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const MisteryBoxesList = ({stores, title}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••
    const [misteryBoxes, setMisteryBoxes] = React.useState<MisteryBoxEl[]>([]);

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••
    const renderItem = (item: MisteryBoxEl, index: number) => {
        return <Block style={{
            paddingLeft: index === 0 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2,
            paddingRight: index === misteryBoxes.length - 1 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2
        }}>
            <MisteryBoxItem misteryBoxEl={item}/>
        </Block>
    };

    // ••• useSelector methods •••


    // ••• useEffect methods •••
    useEffect(() => {
        if (stores && stores.length > 0) {
            const els: MisteryBoxEl[] = [];
            stores?.forEach((store: Store) => {
                if (store.misteryBoxes && store.misteryBoxes.length > 0) {
                    store.misteryBoxes?.forEach((misteryBox: MisteryBox) => {
                        els.push({store, misteryBox, distance: store.distance});
                    });
                }
            });
            setMisteryBoxes(els);
        }
    }, [stores]);

    return (
        <Block>
            <Block style={{
                paddingHorizontal: SIZES.DEFAULT_PADDING,
            }}>
                <NewLine multiplier={2}/>
                {title && (
                    <>
                        <Text h4 bold>{title}</Text>
                        <NewLine multiplier={1}/>
                    </>
                )}
            </Block>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={misteryBoxes}
                keyExtractor={(item, index) => `${index}`.toString()}
                renderItem={({item, index}) => renderItem(item, index)}
            />
        </Block>
    );
};

export default MisteryBoxesList;
