import type {Medication} from "../interfaces/Medication.ts";
import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/medications'

const medicationService = {
    getAllMedications: async (): Promise<Medication[]> => {
        try {
            const res = await axios.get<Medication[]>(API_BASE_URL);
            return res.data;
        } catch (error: unknown) {
            console.error("Error fetching medications:", error);
            throw error;
        }
    },
    getMedicationById: async (id: number): Promise<Medication> => {
        try {
            const res = await axios.get<Medication>(`${API_BASE_URL}/${id}`);
            return res.data;
        } catch (error: unknown) {
            console.error(`Error fetching medication with id: ${id}:`, error);
            throw error;
        }
    },
    createMedication: async (medication: Omit<Medication, 'id'>): Promise<Medication> => {
        try {
            const res = await axios.post<Medication>(API_BASE_URL, medication);
            return res.data;
        } catch (error: unknown) {
            console.error(`Error adding medication`, error);
            throw error;
        }
    },
    updateMedication: async (id: number, medication: Medication): Promise<Medication> => {
        try {
            const res = await axios.put(`${API_BASE_URL}/${id}`, medication);
            return res.data;
        } catch (error: unknown) {
            console.error(`Error updating medication with id: ${id}:`, error);
            throw error;
        }
    },
    deleteMedication: async (id: number): Promise<void> => {
        try {
            const res = await axios.delete(`${API_BASE_URL}/${id}`);
            return res.data;
        } catch (error: unknown) {
            console.error(`Error deleting medication with id: ${id}:`, error);
            throw error;
        }
    },
}

export default medicationService;