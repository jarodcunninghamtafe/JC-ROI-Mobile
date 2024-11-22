const API_BASE_URL = "http://localhost:3000/api";

export async function fetchDepartments() {
    try {
        const response = await fetch(`${API_BASE_URL}/departments`);
        if (!response.ok) throw new Error("Failed to fetch departments");
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function fetchPeople() {
    try {
        const response = await fetch(`${API_BASE_URL}/people`);
        if (!response.ok) throw new Error("Failed to fetch categories");
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function fetchPersonById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/people/${id}`);
        if (!response.ok) throw new Error("Failed to fetch person");
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function addPerson(personData) {
    try {
        const response = await fetch(`${API_BASE_URL}/person`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personData),
        });
        if (!response.ok) throw new Error('Failed to add person');
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function updatePerson(id, updatedPerson) {
    try {
        const response = await fetch(`${API_BASE_URL}/people/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPerson),
        });
        if (!response.ok) throw new Error('Failed to update person');
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function deletePerson(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/person/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete person');
        return true;
    } catch (error) {
        throw error;
    }
}
