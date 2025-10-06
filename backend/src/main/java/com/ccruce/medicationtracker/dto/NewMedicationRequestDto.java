package com.ccruce.medicationtracker.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class NewMedicationRequestDto {

    @NotBlank(message = "Name is required")
    @Size(max = 255, message = "Name cannot exceed 255 characters")
    private String name;

    @NotBlank(message = "Dosage is required")
    @Size(max = 255, message = "Size cannot exceed 255 characters")
    private String dosage;

    @NotBlank(message = "Frequency is required")
    @Size(max = 255, message = "Frequency cannot exceed 255 characters")
    private String frequency;

    @Size(max = 1000, message = "Notes cannot exceed 1000 characters")
    private String notes;

    private Integer quantity;
}
