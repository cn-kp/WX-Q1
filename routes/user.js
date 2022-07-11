const express = require("express");
const router = express.Router();
require('dotenv').config()

// get for exercise 1

router.get('/', async (req, res) => {
    try{
        res.json({name: process.env.NAME, token : process.env.TOKEN});
    } catch {
        res.status(400).json
    }
})

module.exports = router;
