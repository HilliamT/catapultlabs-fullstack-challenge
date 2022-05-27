import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import SavingsCalculator from './components/SavingsCalculator'

// Note: This is just for example purposes
// should be replaced with real data from the server
const tempData = {
    xAxis: [0, 1, 2, 3, 4, 5],
    yAxis: [100, 150, 180, 210, 240, 350],
}

function App() {
    return (
        <ChakraProvider>
            {/* We've just bundled everything into one file here to 
            get you started!*/}
            <DefaultLayout>
                <SavingsCalculator />
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
