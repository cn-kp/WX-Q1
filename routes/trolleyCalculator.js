const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const RequestURL =
  "http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/trolleyCalculator?token=234183a4-112c-4087-81f9-767f0060e59c";

router.get("/", async (req, res) => {
  try {
    const exampleValue = {
      products: [
        {
          name: "string",
          price: 120,
        },
      ],
      specials: [
        {
          quantities: [
            {
              name: "string",
              quantity: 2,
            },
          ],
          total: 2,
        },
      ],
      quantities: [
        {
          name: "string",
          quantity: 0,
        },
      ],
    };
    const response = await axios.post(RequestURL, exampleValue);
    res.json(response);
    // const response = await axios({
    //   method: "post",
    //   url: RequestURL,
    //   data: exampleValue,
    // });
    // res.json(response);
  } catch {
    res.status(400).json;
  }
});

module.exports = router;
