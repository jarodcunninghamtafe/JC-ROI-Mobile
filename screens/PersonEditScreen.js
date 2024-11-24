import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchPersonById, updatePerson, addPerson } from '../utils/api';

export default function PersonEditScreen(props) {

    const { id } = props.route.params

    const [person, setPerson] = useState({
        name: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        departmentId: null,
    });
    const [offline, setOffline] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id !== -1) {
                    const data = await fetchPersonById(id);
                    setPerson(data);
                    console.log(data)
                } else {
                    console.log(person)
                }
            } catch (err) {
                console.error(err);
                setOffline(true);
                setError("Unable to fetch data, offline mode");
            }
        };
        fetchData();
    }, []);

    function showPeopleView() {
        props.navigation.navigate("PeopleViewScreen")
    }

    async function handleSubmit() {
        try {
            if (id === -1) {
                await addPerson(person);
            } else {
                await updatePerson(id, person);
            }
            props.navigation.goBack();
        } catch (err) {
            console.error(err);
            setError("Failed to save data.");
        }
    };

    async function handleSubmitTest() {
        try {
            if (id === -1) {
                await addPerson({
                    name: "New Person",
                    phone: "1234567890",
                    departmentId: 1,
                    street: "123 Main St",
                    city: "Anytown",
                    state: "ST",
                    zip: "12345",
                    country: "US",
                });
            } else {
                await updatePerson(id, { ...person, name: person.name + " Updated" });
            }
            props.navigation.goBack();
        } catch (err) {
            console.error(err);
            setError("Failed to save data.");
        }
    }

    return (
        <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text variant='displaySmall'>PersonEditScreen</Text>
            <Text>{id}</Text>
            <Text>{person?.phone}</Text>
            <Text>{person?.name}</Text>
            <Text>{person?.street}</Text>
            <Text>{person?.city}</Text>
            <Text>{person?.state}</Text>
            <Button mode="contained" icon="update" onPress={() => showPeopleView()}>
                Cancel
            </Button>
            <Button mode="contained" icon="update" onPress={() => handleSubmitTest()}>
                Save or New
            </Button>
        </Surface>
    )
}
