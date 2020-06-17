import React from "react";
import {Button, StyleSheet, View, Text,} from "react-native";
import {Navigation} from "react-native-navigation";

interface Props {

}

const styles = StyleSheet.create({});

const HomeScreenView = (props) => {
    return (
        <View>
            <Text>Hello React Native Navigation 👋</Text>

            <Button
                title='Push Settings Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'Settings'
                    }
                })} />
        </View>
    );
};

export default HomeScreenView;
