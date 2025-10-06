package com.ccruce.medicationtracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MedicationResponseDto {

    private Long id;
    private String name;
    private String dosage;
    private String frequency;
    private String notes;
    private Integer quantity;
}
