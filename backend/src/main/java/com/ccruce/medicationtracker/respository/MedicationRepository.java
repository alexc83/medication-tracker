package com.ccruce.medicationtracker.respository;

import com.ccruce.medicationtracker.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, Long> {

}
