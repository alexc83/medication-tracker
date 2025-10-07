import {Box, Heading} from "@chakra-ui/react";
import MedicationList from "./components/MedicationList.tsx";
import Header from "./components/Header.tsx";


function App() {

    return (
        <>
            <Header/>
            <Box p={4} mt={20}>
                <Heading size="2xl" textAlign="center">
                    Welcome to the Medication Tracker App!
                </Heading>
                <MedicationList/>
            </Box>
        </>
    )
}

export default App
