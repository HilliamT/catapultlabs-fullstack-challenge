import axios from 'axios'

const calculateSavings = async ({
    initial,
    monthlyDeposit,
    monthlyInterestRate,
    months,
}: {
    initial: number
    monthlyDeposit: number
    monthlyInterestRate: number
    months: number
}): Promise<number> => {
    const {
        data: {
            data: { compoundReturn },
        },
    } = await axios.get(`http://localhost:3001/api/savings/monthly-deposit`, {
        params: {
            initial,
            monthlyDeposit,
            monthlyInterestRate,
            months,
        },
    })

    return compoundReturn
}

export default calculateSavings
