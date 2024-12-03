import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://localhost:3000/api";

async function isOnline() {
    try {
        const response = await fetch(`${API_BASE_URL}/departments`);
        return response.ok;
    } catch (error) {
        return false;
    }
}

export async function fetchDepartments(setOfflineStatus) {
    try {
        const online = await isOnline();
        setOfflineStatus(!online);

        if (online) {
            const response = await fetch(`${API_BASE_URL}/departments`);
            if (!response.ok) throw new Error("Failed to fetch Departments");
            const data = await response.json();
            await AsyncStorage.setItem("departments", JSON.stringify(data));
            return data;
        } else {
            const cachedData = await AsyncStorage.getItem("departments");
            if (cachedData) {
                return JSON.parse(cachedData);
            } else {
                throw new Error("No cached departments data available");
            }
        }
    } catch (error) {
        console.error("Error fetching departments:", error.message);
        return null;
    }
}

export async function fetchPeople(setOfflineStatus) {
    try {
        const online = await isOnline();
        setOfflineStatus(!online);

        if (online) {
            const response = await fetch(`${API_BASE_URL}/people`);
            if (!response.ok) throw new Error("Failed to fetch People");
            const data = await response.json();
            await AsyncStorage.setItem("people", JSON.stringify(data));
            return data;
        } else {
            const cachedData = await AsyncStorage.getItem("people");
            if (cachedData) {
                return JSON.parse(cachedData);
            } else {
                throw new Error("No cached people data available");
            }
        }
    } catch (error) {
        console.error("Error fetching people:", error.message);
        return null;
    }
}

export async function fetchPersonById(id, setOfflineStatus) {
    try {
        const online = await isOnline();
        setOfflineStatus(!online);

        if (online) {
            const response = await fetch(`${API_BASE_URL}/people/${id}`);
            if (!response.ok) throw new Error("Failed to fetch Person");
            const data = await response.json();
            await AsyncStorage.setItem(`person_${id}`, JSON.stringify(data));
            return data;
        } else {
            const cachedData = await AsyncStorage.getItem(`person_${id}`);
            if (cachedData) {
                return JSON.parse(cachedData);
            } else {
                throw new Error(`No cached data available for person with ID ${id}`);
            }
        }
    } catch (error) {
        console.error(`Error fetching person by ID ${id}:`, error.message);
        return null;
    }
}

export async function addPerson(personData) {
    try {
        const response = await fetch(`${API_BASE_URL}/people`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(personData),
        });
        if (!response.ok) throw new Error("Failed to add Person");
        return await response.json();
    } catch (error) {
        console.error("Error adding person:", error.message);
        throw error;
    }
}

export async function updatePerson(id, updateData) {
    try {
        const response = await fetch(`${API_BASE_URL}/people/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
        });
        if (!response.ok) throw new Error("Failed to update Person");
        return await response.json();
    } catch (error) {
        console.error(`Error updating person with ID ${id}:`, error.message);
        throw error;
    }
}

export async function deletePerson(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/people/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete Person");
        return true;
    } catch (error) {
        console.error(`Error deleting person with ID ${id}:`, error.message);
        throw error;
    }
}