import type {Medication} from "../interfaces/Medication.ts";
import {useEffect, useState} from "react";
import medicationService from "../services/medicationService.ts";

interface UseMedicationResult {
    medications: Medication[];
    loading: boolean;
    error: string | null;
}

const useMedication = (): UseMedicationResult => {
    const [medications, setMedications] = useState<Medication[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMedications = async () => {
            try {
                const data = await medicationService.getAllMedications();
                setMedications(data);
                setLoading(false);
            } catch (e: any) {
                setError(e.message);
                setLoading(false);
            }
        }
        fetchMedications();
    }, [])
    return {medications, loading, error};

}

export default useMedication;