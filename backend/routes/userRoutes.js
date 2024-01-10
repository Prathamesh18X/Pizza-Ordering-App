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
router.post("/login", async(req,res) => {
    const {email , password} = req.body
    try {
        const user = await Users.find({email, password})
        if(user.length > 0){
            const currentUser ={
                name : user[0].name,
                email : user[0].email,
                isAdmin : user[0].isAdmin,
                _id : user[0]._id,
            }
            res.send(currentUser);
        }
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

module.exports = router;