package com.ccruce.medicationtracker.mapper;

import com.ccruce.medicationtracker.dto.MedicationResponseDto;
import com.ccruce.medicationtracker.dto.NewMedicationRequestDto;
import com.ccruce.medicationtracker.entity.Medication;

public class MedicationMapper {

    public static Medication toEntity(NewMedicationRequestDto newMedicationRequestDto) {
        Medication newMedication = new Medication();
        newMedication.setName(newMedicationRequestDto.getName());
        newMedication.setDosage(newMedicationRequestDto.getDosage());
        newMedication.setFrequency(newMedicationRequestDto.getFrequency());
        newMedication.setNotes(newMedicationRequestDto.getNotes());
        newMedication.setQuantity(newMedicationRequestDto.getQuantity());
        return newMedication;
    }

    public static MedicationResponseDto toDto(Medication medication) {
        MedicationResponseDto newDto = new MedicationResponseDto();
        newDto.setId(medication.getId());
        newDto.setName(medication.getName());
        newDto.setDosage(medication.getDosage());
        newDto.setFrequency(medication.getFrequency());
        newDto.setNotes(medication.getNotes());
        newDto.setQuantity(medication.getQuantity());
        return newDto;

    }
}
