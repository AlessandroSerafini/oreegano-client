import React, {ComponentProps} from 'react';
import {FlatList, StyleSheet,} from 'react-native';
import Block from "../Block";
import Text from "../Text";
import {SIZES} from "../../data/ThemeConstants";
import NewLine from "../NewLine";
import {Order} from "../../context/orders/ordersActions";
import OrderItem from "./OrderBox";

// ------------------------------------ WORKING VARIABLES ------------------------------------

// ----------------------------------------- STYLES -----------------------------------------

const styles = StyleSheet.create({});

// --------------------------------------- INTERFACES ---------------------------------------

interface Props extends ComponentProps<any> {
    orders: Order[];
    title?: string;
}

// ------------------------------------- WORKING METHODS -------------------------------------

// ----------------------------------- MAIN RENDER METHOD -----------------------------------

const OrdersList = ({orders, title, ...restProps}: Props) => {
    // ••• local variables •••

    // ••• navigation variables •••

    // ••• state variables & methods •••

    // ••• refs variables •••

    // ••• working methods •••

    // ••• render methods •••
    const renderItem = (item: Order, index: number) => {
        return <Block style={{
            paddingLeft: index === 0 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2,
            paddingRight: index === orders.length - 1 ? SIZES.DEFAULT_PADDING : SIZES.DEFAULT_PADDING / 2
        }}>
            <OrderItem order={item} componentId={restProps.componentId}/>
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
                data={orders}
                keyExtractor={(item, index) => `${index}`.toString()}
                renderItem={({item, index}) => renderItem(item, index)}
            />
        </>
    );
};

export default OrdersList;
