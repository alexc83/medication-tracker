import {Avatar, Card, Icon, Text} from "@chakra-ui/react";
import {CiPill} from "react-icons/ci";
import React from "react";
import type {Medication} from "../interfaces/Medication.ts";

interface MedicationCardProps {
    medication: Medication;
}

const MedicationCard: React.FC<MedicationCardProps> = ({medication}) => {
    return (
        <Card.Root>
            <Card.Body>
                <Avatar.Root>
                    <Icon size="xl">
                        <CiPill />
                    </Icon>
                </Avatar.Root>
            </Card.Body>
            <Text fontWeight="bold">
                {medication.name}
            </Text>
            <Text ml={2} color={"gray.500"}>
                {medication.dosage}
            </Text>
            <Text ml={2} color={"gray.500"}>
                {medication.frequency}
            </Text>
            {medication.notes !== null &&
              <Text ml={2} color={"gray.500"}>
                  {medication.notes}
              </Text>
            }
        </Card.Root>
    )
}

export default MedicationCard;