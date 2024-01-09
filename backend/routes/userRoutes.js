const express = require('express')
const router = express.Router();
const Users = require('../models/userModel')

router.post("/register", async(req,res) => {
    const {name , email , password} = req.body
    const newUser = new Users({name , email , password})
    try {
        await newUser.save()
        res.send('User Successfully Registered')
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

module.exports = router;