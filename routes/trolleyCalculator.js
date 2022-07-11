const express = require("express");
const router = express.Router();
const axios = require("axios").default;
require("dotenv").config

const RequestURL =
  `http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/trolleyCalculator?token=${process.env.TOKEN}`;

router.get("/", async (req, res) => {
  try {
    const exampleValue = {
      "products": [
        {
          "name": "string",
          "price": 0
        }
      ],
      "specials": [
        {
          "quantities": [
            {
              "name": "string",
              "quantity": 0
            }
          ],
          "total": 0
        }
      ],
      "quantities": [
        {
          "name": "string",
          "quantity": 0
        }
      ]
    }
    const response = await axios.post(RequestURL, exampleValue);
    res.json(response);
    // const response = await axios({
    //   method: "post",
    //   url: RequestURL,
    //   data: exampleValue,
    // });
    // res.json(response);
  } catch (err){
    console.log(err)
    res.status(400).json;
  }
});

module.exports = router;
