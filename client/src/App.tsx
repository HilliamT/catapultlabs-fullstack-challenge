import React from 'react'
import './App.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import LineChart from './components/LineChart'

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
                <Container pt={6}>
                    <LineChart
                        title="Savings Over time"
                        xAxisData={tempData.xAxis}
                        yAxisData={tempData.yAxis}
                        xLabel="Years"
                        yLabel="Amount"
                    />
                </Container>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
