import express from "express";

const router = express.Router();

/*//////////////////////////////////////////////////////////////
                            MIDDLEWARE
//////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////
                        ENDPOINT DIRECTORIES
//////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////
                            ENDPOINTS
//////////////////////////////////////////////////////////////*/

router.get("/", (req, res) => {
  return res.send("Hello World to Savings!");
});

export default router;
