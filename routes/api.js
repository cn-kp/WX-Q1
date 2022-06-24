const express = require("express");
const router = express.Router();
const User = require("../models/user")

// get all
router.get('/', async (req, res) => {
    try{
        const userData = await User.find();
        res.json(userData);
    } catch {
        res.status(400).json
    }
})

// create sample user
router.post('/', async (req, res) => {
    try{
        const userData = await User.create({
            name:req.body.name,
            token:req.body.token,
        });
        res.json(userData);
    } catch {
        res.status(400).json
    }
})
//update one
router.patch('/:id', async (req, res) => {
    try{

    } catch {
        
    }
})
//delete one
router.delete('/:id', async (req, res) => {
    try{

    } catch {
        
    }
})
module.exports = router;
