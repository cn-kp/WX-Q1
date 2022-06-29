const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const requestURL =
  "http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/products?token=234183a4-112c-4087-81f9-767f0060e59c";
const requestURL2 =
  "http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/shopperHistory?token=234183a4-112c-4087-81f9-767f0060e59c";
router.post("/", async (req, res) => {
  try {
    const response = await axios.get(requestURL);
    products = response.data;

    let productData;
    switch (req.body.sortOption) {
      case "Low":
        productData = products.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        return res.json(productData);
      case "High":
        productData = products.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        return res.json(productData);
      case "Ascending":
        productData = products.sort((a, b) => a.name.localeCompare(b.name));
        return res.json(productData);
      case "Descending":
        productData = products.sort((a, b) => b.name.localeCompare(a.name));
        return res.json(productData);
      case "Recommended":
        // create empty array, store all name of products in it and count how many have the same names.
        let productName = [];
        const response2 = await axios.get(requestURL2);
        const shopperHistory = response2.data;
        function sortByMostFrequency(array) {
          var frequency = {};

          array.forEach(function (value) {
            frequency[value] = 0;
          });

          var uniques = array.filter(function (value) {
            return ++frequency[value] == 1;
          });

          return uniques.sort(function (a, b) {
            return frequency[b] - frequency[a];
          });
        }

        for (let i = 0; i < shopperHistory.length; i++) {
          for (let j = 0; j < shopperHistory[i].products.length; j++) {
            for (let k = 0; k < shopperHistory[i].products[j].quantity; k++) {
              productName.push(shopperHistory[i].products[j].name);
            }
          }
        }
        const sortedMostBrought = sortByMostFrequency(productName);
        let sortedProductsArray = [];
        for (let i = 0; i < sortedMostBrought.length; i++) {
          for (let j = 0; j < products.length; j++) {
            if (sortedMostBrought[i] === products[j].name) {
              sortedProductsArray.push(products[j]);
            }
          }
        }

        return res.json(sortedProductsArray);
      // have an array ordered by most to least.
      default:
        return res.json(product);
    }
  } catch {
    res.status(400).json;
  }
});

module.exports = router;
