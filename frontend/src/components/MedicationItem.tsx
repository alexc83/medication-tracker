import type {Medication} from "../interfaces/Medication.ts";
import React from "react";
import {Button, Card, Icon, Text} from "@chakra-ui/react";
import { CiPill, CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";




interface MedicationItemProps {
    medication: Medication;
}

const MedicationItem: React.FC<MedicationItemProps> = ({ medication }) => {
    return (
        <Card.Root
            bg="gray-200"
            py={2}
            borderRadius="md"
            boxShadow="md"
            width="320px"
            mx="auto"
            _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.2s",
                boxShadow: "lg",
            }}
        >
            <Card.Body
                display="flex"
                flexDirection="column"
                alignItems="start"
                gap={2}
            >
                <Icon size="xl">
                    <CiPill />
                </Icon>
                <Card.Title mt={2} fontWeight="900">
                    {medication.name}
                </Card.Title>
                <Card.Description>
                    <Text ml={2} color={"gray.500"}>
                        <Text as="span" fontWeight="900" color={"gray.900"}>Dose:</Text> {medication.dosage}
                    </Text>
                    <Text ml={2} color={"gray.500"}>
                        <Text as="span" fontWeight="900" color={"gray.900"}>Frequency:</Text> {medication.frequency}
                    </Text>
                    {medication.notes !== null &&
                      <Text ml={2} color={"gray.500"}>
                        <Text as="span" fontWeight="900" color={"gray.900"}>Notes:</Text> {medication.notes}
                      </Text>
                    }
                </Card.Description>
            </Card.Body>
            <Card.Footer
                justifyContent="space-between"
            >
                <Button
                    variant="solid"
                    color="blue.500"
                    fontWeight="bold"
                    backgroundColor="blue.100"
                    width="125px"
                    _hover={{
                        transform: "scale(1.02)",
                        transition: "transform 0.2s",
                        boxShadow: "lg",
                    }}

                >
                    <Icon size="lg">
                        <CiEdit />
                    </Icon>
                    Edit
                </Button>
                <Button
                    variant="solid"
                    color="red.500"
                    backgroundColor="red.100"
                    width="125px"
                    _hover={{
                        transform: "scale(1.02)",
                        transition: "transform 0.2s",
                        boxShadow: "lg",
                    }}

                >
                    <Icon size="lg">
                        <RiDeleteBin5Line />
                    </Icon>
                    Delete
                </Button>

            </Card.Footer>
        </Card.Root>

    );
}

export default MedicationItem;