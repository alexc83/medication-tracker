package com.ccruce.medicationtracker.controller;

import com.ccruce.medicationtracker.dto.MedicationResponseDto;
import com.ccruce.medicationtracker.dto.NewMedicationRequestDto;
import com.ccruce.medicationtracker.entity.Medication;
import com.ccruce.medicationtracker.service.MedicationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medications")
public class MedicationController {

    private final MedicationService medicationService;

    @Autowired
    public MedicationController(MedicationService medicationService) {
        this.medicationService = medicationService;
    }

    @GetMapping
    public List<MedicationResponseDto> getAllMedications() {
        return medicationService.getAllMedications();
    }

    @GetMapping("/{id}")
    public MedicationResponseDto getMedicationById(@PathVariable Long id) {
        return medicationService.getMedicationById(id);
    }

    @PostMapping
    public MedicationResponseDto createMedication(@Valid @RequestBody NewMedicationRequestDto newMedicationRequestDto) {
        return medicationService.addMedication(newMedicationRequestDto);
    }
}
