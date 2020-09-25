import React, {ComponentProps} from 'react';
import {FlatList, StyleSheet,} from 'react-native';
import {MisteryBox} from "../../context/misteryBoxes/misteryBoxesActions";
import Block from "../Block";
import Text from "../Text";
import MisteryBoxItem from "./MisteryBox";
import {SIZES} from "../../data/ThemeConstants";
import NewLine from "../NewLine";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props extends ComponentProps<any> {
    boxes: MisteryBox[];
    title?: string;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const MisteryBoxesList = ({boxes, title, ...restProps}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••
    const renderItem = (item: MisteryBox, index: number) => {
        return <Block style={{
            paddingLeft: index === 0 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2,
            paddingRight: index === boxes.length - 1 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2
        }}>
            <MisteryBoxItem box={item} componentId={restProps.componentId}/>
        </Block>
    };

    // ••• useSelector methods •••


    // ••• useEffect methods •••

    return (
        <>
            {title && (
                <>
                    <Text h4 semiBold>{title}</Text>
                    <NewLine multiplier={2}/>
                </>
            )}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{marginHorizontal: -SIZES.DEFAULT_PADDING}}
                data={boxes}
                keyExtractor={(item, index) => `${index}`.toString()}
                renderItem={({item, index}) => renderItem(item, index)}
            />
        </>
    );
};

export default MisteryBoxesList;
