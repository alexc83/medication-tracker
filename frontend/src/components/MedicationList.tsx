import React from "react";
import {Alert, Box, Flex, Heading} from "@chakra-ui/react";
import MedicationItem from "./MedicationItem.tsx";
import useMedication from "../hooks/useMedication.ts";

const MedicationList: React.FC = () => {

    const {medications, loading, error} = useMedication();

    if (medications.length === 0) {
        return (
            <Box>
                <Heading size="lg">
                    "No medications found"
                </Heading>
            </Box>
        )
    }
    if (!loading) {
        return (
            <Box p={4}>
                <Heading size="lg" textAlign="center" pb={25} pt={25}>
                    Medication List Here
                </Heading>
                <Flex
                    justify="center"
                    flexWrap="wrap"
                    gap={6}
                    maxW="1200px"
                    mx="auto"
                >
                    {medications.map((medication) => (
                        <MedicationItem
                            key={medication.id}
                            medication={medication}
                        />
                    ))}
                </Flex>
            </Box>
        );
    }

    if (error) {
        return (
            <Alert.Root status="error">
                <Alert.Indicator/>
                <Alert.Title>Error retrieving medication list</Alert.Title>
            </Alert.Root>
        )
    }

}

export default MedicationList;