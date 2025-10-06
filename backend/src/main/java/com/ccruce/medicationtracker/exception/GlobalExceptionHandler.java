package com.ccruce.medicationtracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorApi> handleValidationExceptions(MethodArgumentNotValidException ex) {
        ErrorApi errorApi = new ErrorApi(
                HttpStatus.BAD_REQUEST.value(),
                LocalDateTime.now(),
                "Validation failed",
                ex.getBindingResult().getFieldError().getDefaultMessage()
        );
        return new ResponseEntity<>(
                errorApi,
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(MedicationNotFoundException.class)
    public ResponseEntity<ErrorApi> handleMedicationNotFoundException(MedicationNotFoundException ex) {
        ErrorApi errorApi = new ErrorApi(
          HttpStatus.NOT_FOUND.value(),
          LocalDateTime.now(),
          "Medication not found in database",
          ex.getMessage()

        );
        return new ResponseEntity<>(
                errorApi,
                HttpStatus.NOT_FOUND
        );
    }
}
