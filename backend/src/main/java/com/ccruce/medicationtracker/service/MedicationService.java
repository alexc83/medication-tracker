package com.ccruce.medicationtracker.service;

import com.ccruce.medicationtracker.dto.MedicationResponseDto;
import com.ccruce.medicationtracker.dto.NewMedicationRequestDto;
import com.ccruce.medicationtracker.entity.Medication;

import java.util.List;

public interface MedicationService {

    List<MedicationResponseDto> getAllMedications();
    MedicationResponseDto getMedicationById(Long id);
    MedicationResponseDto addMedication(NewMedicationRequestDto newMedicationRequestDto);
}
