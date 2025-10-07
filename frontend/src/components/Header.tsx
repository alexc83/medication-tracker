import {Box, Button, Flex, Heading, Icon} from "@chakra-ui/react";
import { MdMedication } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const Header = () => {
    return (
        <Box
            as="header"
            bg="blue.50"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={100}
            boxShadow="md"
        >
            <Flex
                align="center"
                justify="space-between"
                paddingY={4}
                paddingX={[4, 8, 12]}
            >
                <Flex
                    align="center"
                    justify="space-between"
                    gap={4}
                >
                    <Icon size="2xl">
                        <MdMedication />
                    </Icon>
                    <Heading>MedTracker</Heading>
                </Flex>
                <Button
                    backgroundColor="blue.400"
                    color="white"
                    fontWeight="bold"
                    fontSize="md"
                    variant="solid"
                >
                    <IoMdAdd />
                    Add Medication
                </Button>
            </Flex>
        </Box>
    )
}

export default Header;