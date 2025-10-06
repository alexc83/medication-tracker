package com.ccruce.medicationtracker.service;

import com.ccruce.medicationtracker.dto.MedicationResponseDto;
import com.ccruce.medicationtracker.dto.NewMedicationRequestDto;
import com.ccruce.medicationtracker.entity.Medication;
import com.ccruce.medicationtracker.exception.MedicationNotFoundException;
import com.ccruce.medicationtracker.mapper.MedicationMapper;
import com.ccruce.medicationtracker.respository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationServiceImpl implements MedicationService{

    private final MedicationRepository medicationRepository;

    @Autowired
    public MedicationServiceImpl(MedicationRepository medicationRepository) {
        this.medicationRepository = medicationRepository;
    }


    @Override
    public List<MedicationResponseDto> getAllMedications() {

        return medicationRepository.findAll()
                .stream()
                .map((medication) -> MedicationMapper.toDto(medication))
                .toList();
    }

    @Override
    public MedicationResponseDto getMedicationById(Long id) {
        Medication foundMedication = medicationRepository.findById(id)
                .orElseThrow(() ->
                        new MedicationNotFoundException(
                                "Medication with id " + id + " not found")
                );
        return MedicationMapper.toDto(foundMedication);
    }

    @Override
    public MedicationResponseDto addMedication(NewMedicationRequestDto newMedicationRequestDto) {
        Medication newMedication = MedicationMapper.toEntity(newMedicationRequestDto);
        return MedicationMapper.toDto(medicationRepository.save(newMedication));
    }



}
