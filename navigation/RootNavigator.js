import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from "./MainNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName='MainNavigator' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='MainNavigator'
                component={MainNavigator}
            />
            <Stack.Screen
                name='NotFoundScreen'
                component={NotFoundScreen}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});