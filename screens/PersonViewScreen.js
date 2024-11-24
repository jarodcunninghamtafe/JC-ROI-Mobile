import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchPersonById } from '../utils/api';

export default function PersonViewScreen(props) {

    const { id } = props.route.params

    const [person, setPerson] = useState(null);
    const [offline, setOffline] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPersonById(id);
                setPerson(data);
                console.log(data)
            } catch (err) {
                console.error(err);
                setOffline(true);
                setError("Unable to fetch data, offline mode");
            }
        };

        fetchData();
    }, []);

    return (
        <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text variant='displaySmall'>PersonViewScreen</Text>
            <Text>{id}</Text>
            <Text>{person?.phone}</Text>
            <Text>{person?.name}</Text>
            <Text>{person?.street}</Text>
            <Text>{person?.city}</Text>
            <Text>{person?.state}</Text>
        </Surface>
    )
}
