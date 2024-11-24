import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchPeople, deletePerson } from "../utils/api"

export default function PeopleViewScreen(props) {

    const isFocused = useIsFocused();

    const [people, setPeople] = useState([]);
    const [offline, setOffline] = useState(false);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);
    const [selectedPersonId, setSelectedPerson] = useState(null);
    const [selectedPersonName, setSelectedPersonName] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetchPeople();
            setPeople(data);
        } catch (err) {
            console.error(err);
            setOffline(true);
            setError("Unable to fetch data, offline mode");
        }
    };

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    function showAddPerson() {
        props.navigation.navigate("PersonEditScreen", { id: -1 });
    }

    function showEditPerson(id) {
        props.navigation.navigate("PersonEditScreen", { id: id });
    }

    function showViewPerson(id) {
        props.navigation.navigate("PersonViewScreen", { id: id });
    }

    function showPeopleView() {
        props.navigation.navigate("PeopleViewScreen");
    }

    function handleDeletePerson(id) {
        console.log(id)
    }

    async function handleDelete() {
        if (selectedPersonId !== null) {
            try {
                const success = await deletePerson(selectedPersonId);
                if (success) {
                    fetchData();
                    hideDialog();
                } else {
                    setError("Failed to delete. Please try again.");
                }
            } catch (err) {
                console.error("Error deleting:", err);
                setError("Failed to delete. Check your connection.");
                hideDialog();
            }
        }
    }

    async function handleDeletePersonTest() {
        const lastPerson = people[people.length - 1].id;
        try {
            const success = await deletePerson(lastPerson);
            if (success) {
                fetchData();
            } else {
                setError("Failed to delete. Please try again.");
            }
        } catch (err) {
            console.error("Error deleting:", err);
            setError("Failed to delete. Check your connection.");
        }
    }

    return (
        <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text variant='displaySmall'>PeopleViewScreen</Text>
            {people.map((person) => (
                <Text key={person.id}>{person.name}</Text>
            ))}
            <Button mode="contained" icon="update" onPress={() => showViewPerson(1)}>
                View first person
            </Button>
            <Button mode="contained" icon="update" onPress={() => showEditPerson(2)}>
                Edit second person
            </Button>
            <Button mode="contained" icon="update" onPress={() => showAddPerson()}>
                Add new person
            </Button>
            <Button mode="contained" icon="update" onPress={() => handleDeletePersonTest()}>
                Delete last person
            </Button>
        </Surface>
    )
}
