import express from "express";

const router = express.Router();

/*//////////////////////////////////////////////////////////////
                            MIDDLEWARE
//////////////////////////////////////////////////////////////*/

router.use((req, res, next) => {
  const { initial, monthlyAmount, interestRate, months } = req.query;

  // Validate the query parameters
  if (initial == null)
    return res.status(400).send("Missing parameter 'initial'");
  if (monthlyAmount == null)
    return res.status(400).send("Missing parameter 'monthlyAmount'");
  if (interestRate == null)
    return res.status(400).send("Missing parameter 'interestRate'");
  if (months == null) return res.status(400).send("Missing parameter 'months'");

  next();
});

/*//////////////////////////////////////////////////////////////
                            HELPERS
//////////////////////////////////////////////////////////////*/

/**
 * Compute the total compounded return from an initial principal and monthly deposits
 * @param initial The initial principal
 * @param monthlyAmount The monthly deposit amount
 * @param monthlyInterestRate The monthly interest rate
 * @param months The duration of the investment
 * @returns
 */
function computeMonthlyDepositReturn(
  initial: number,
  monthlyAmount: number,
  monthlyInterestRate: number,
  months: number
): number {
  const multiplier = (1 + monthlyInterestRate) ** months;
  const compoundedInitial = initial * multiplier;
  const compoundedDeposits =
    (monthlyAmount * (multiplier - 1)) / monthlyInterestRate;

  return compoundedInitial + compoundedDeposits;
}

/*//////////////////////////////////////////////////////////////
                            ENDPOINT
//////////////////////////////////////////////////////////////*/

router.get("/", (req, res) => {
  const { initial, monthlyAmount, monthlyInterestRate, months } = req.query;
  console.log(req.query);

  const compoundReturn = computeMonthlyDepositReturn(
    Number(initial),
    Number(monthlyAmount),
    Number(monthlyInterestRate),
    Number(months)
  );

  return res.send({
    data: {
      compoundReturn,
    },
  });
});

export default router;
