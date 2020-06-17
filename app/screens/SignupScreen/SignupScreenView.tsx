import React from "react";
import {Button, StyleSheet, View,} from "react-native";
import {Navigation} from "react-native-navigation";

interface Props {

}

const styles = StyleSheet.create({});

const SignupScreenView = ({}: Props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Button
                title='Login'
                onPress={() => {
                    /*Navigation.setRoot(mainRoot)*/
                }}
            />
        </View>
    );
};

export default SignupScreenView;
