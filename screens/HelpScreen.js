import React, { useEffect, useState } from 'react';
import { Switch, Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HelpScreen(props) {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    theme = useTheme();

    return (
        <Surface elevation={1} style={{ flex: 1, padding: 20 }}>
            <Text
                variant="headlineLarge"
                style={{
                    marginBottom: 24,
                    fontWeight: "bold",
                    color: theme.colors.primary,
                    fontFamily: "Trebuchet MS",
                }}
            >
                Help Screen
            </Text>

            <View style={{ flexDirection: "row" }}>
                <Text
                    style={{
                        fontFamily: "Trebuchet MS",
                        fontSize: isSwitchOn ? 16 : 14,
                        marginRight: 10,
                    }}
                >
                    Font Size
                </Text>
                <Switch
                    value={isSwitchOn}
                    onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                />
            </View>

            <View>
                <Text
                    variant="headlineSmall"
                    style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
                >
                    1. Staff Directory
                </Text>

                <Text
                    style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
                >
                    Access the Staff Directory by pressing on the "Staff" button in the navigation bar at the bottom of the screen. This will show a list of all the employees, showing their name, phone number, and department. Press on a person's avatar to view the rest of their details. Press the pencil button to edit, or press the bin button to delete. Press the plus button on the lower right of the screen to add a new employee.
                </Text>
            </View>
            <View>
                <Text
                    variant="headlineSmall"
                    style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
                >
                    2. Add New Staff
                </Text>
                <Text
                    style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
                >
                    Press the plus button at the lower left of the screen in the Staff Directory. Fill out all the fields to add a new person, then press the "OK" button to add the new employee.
                </Text>
            </View>
            <View>
                <Text
                    variant="headlineSmall"
                    style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}
                >
                    3. Update Staff Information
                </Text>
                <Text
                    style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
                >
                    Press the pencil button next to the name of the person you want to update in the Staff Directory. Edit the details that have changed, then press the "OK" button to update the person
                </Text>
            </View>
            <View>
                <Text variant="headlineSmall" style={{ paddingVertical: 10, fontFamily: "Trebuchet MS" }}>
                    4. Delete Staff Entry
                </Text>
                <Text
                    style={{ fontFamily: "Trebuchet MS", fontSize: isSwitchOn ? 16 : 14 }}
                >
                    Press the bin button next to the name of the person you want to update in the Staff Directory. Then, press "Delete" to delete the person from the directory
                </Text>
            </View>
        </Surface>
    );
}
