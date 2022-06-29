const express = require("express");
const router = express.Router();

// get for exercise 1
router.get('/', async (req, res) => {
    try{
        res.json({name: "test", token : "1234-455662-22233333-3333"});
    } catch {
        res.status(400).json
    }
})

module.exports = router;
