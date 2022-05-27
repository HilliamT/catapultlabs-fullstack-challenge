import { Badge, Container, Flex, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Stack, Stat, StatHelpText, StatLabel, StatNumber, Tag } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import calculateSavings from '../lib/savings/calculateSavings';

const SavingsCalculator = () => {

    /*//////////////////////////////////////////////////////////////
                                  STATE
    //////////////////////////////////////////////////////////////*/

    const [initial, setInitial] = useState(100);
    const [monthlyDeposit, setMonthlyDeposit] = useState(10);
    const [monthlyInterestRate, setMonthlyInterestRate] = useState(0.05);
    const [totalReturn, setTotalReturn] = useState(0);

    /*//////////////////////////////////////////////////////////////
                                  HOOKS
    //////////////////////////////////////////////////////////////*/

    useEffect(() => {

        (async () => {
            const compoundReturn = await calculateSavings({ initial, monthlyDeposit, monthlyInterestRate: monthlyInterestRate / 100, months: 12 * 50});
            setTotalReturn(compoundReturn);
        })();
        
    }, [initial, monthlyDeposit, monthlyInterestRate]);

    /*//////////////////////////////////////////////////////////////
                                 RENDER
    //////////////////////////////////////////////////////////////*/

    return (
        <Container p={6} borderRadius="lg" borderWidth="1px" overflow="hidden">
            <Heading>Monthly Savings Calculator</Heading>

            <Container py={6}>
                <Stat>
                    <StatLabel>You'd have a total of</StatLabel>
                    <StatNumber>${totalReturn.toFixed(2)}</StatNumber>
                    <StatHelpText>after 50 years</StatHelpText>
                </Stat>
            </Container>

            <Stack>
                <Container>
                    <Tag colorScheme="teal">Initial Principal</Tag>
                    <InputGroup>
                        <InputLeftElement children="$" />
                        <Input value={initial} onChange={(e) => setInitial(Number(e.target.value))} variant="flushed" />
                    </InputGroup>
                    
                </Container>

                <Container>
                    <Tag colorScheme="teal">Monthly Deposit</Tag>
                    <InputGroup>
                        <InputLeftElement children="$" />
                        <Input value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))} variant="flushed" />
                    </InputGroup>
                </Container>

                <Container>
                    <Tag colorScheme="teal">Monthly Interest Rate</Tag>
                    <InputGroup>
                        <Input value={monthlyInterestRate} onChange={(e) => setMonthlyInterestRate(Number(e.target.value))} variant="flushed" />
                        <InputRightElement children="%" />
                    </InputGroup>
                </Container>
            </Stack>
        </Container>
    );
}

export default SavingsCalculator;