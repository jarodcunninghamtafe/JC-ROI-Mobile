import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HomeScreen(props) {
    theme = useTheme();

    const imageIndex = {
        logo: require("../assets/images/roi-logo.jpg"),
        mono: require("../assets/images/roi-logo-monochrome.jpg"),
    };

    const CURRENT_USER_ID = 1;

    function showViewPerson(id) {
        props.navigation.navigate("PeopleNavigator", {screen: "PersonViewScreen", params: {id: id} });
    }

    function showEditPerson(id) {
        props.navigation.navigate("PeopleNavigator", {screen: "PersonEditScreen", params: {id: id} });
    }

    return (
        <Surface elevation={1} style={{ flex: 1, padding: 20 }}>
            <IconButton
                icon="account-circle-outline"
                mode="contained"
                iconColor={theme.colors.onSecondary}
                size={24}
            />
            <Text
                variant="headlineLarge"
                style={{
                    marginBottom: 24,
                    fontWeight: "bold",
                    color: theme.colors.primary,
                    fontFamily: "Trebuchet MS"
                }}
            >
                Hi, John
            </Text>
            <Divider />
            <Image
                source={imageIndex.logo}
                resizeMode="contain"
                style={{ width: "300", height: 150, margin: 20 }}
            />
            <Text
                variant="headlineLarge"
                style={{
                    fontWeight: "bold",
                    marginVertical: 10,
                    textAlign: "center",
                    fontFamily: "Trebuchet MS"
                }}
            >
                ROI HR System
            </Text>
            <Divider style={{ marginVertical: 10 }} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 30,
                }}
            >
                <Text variant="titleMedium" style={{fontFamily: "Trebuchet MS"}}>Remaining Leave Days:</Text>
                <Text>10</Text>
            </View>
            <Divider style={{ marginVertical: 10, fontFamily: "Trebuchet MS" }} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                }}
            >
                <View style={{ marginHorizontal: 10}}>
                    <Button
                        mode="outlined"
                        icon="eye"
                        onPress={() => showViewPerson(CURRENT_USER_ID)}
                    >
                        View Details
                    </Button>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Button
                        mode="contained"
                        icon="pencil"
                        onPress={() => showEditPerson(CURRENT_USER_ID)}
                    >
                        Edit Details
                    </Button>
                </View>
            </View>
        </Surface>
    );
}
