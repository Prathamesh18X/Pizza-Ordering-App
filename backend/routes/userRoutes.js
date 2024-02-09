const express = require('express');
const router = express.Router();
const Users = require('../models/userModel');

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = new Users({ name, email, password });
        await newUser.save();
        res.send('User Successfully Registered');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: "Email or password incorrect" });
        }

        const currentUser = {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            _id: user._id,
        };

        res.send(currentUser);
    } catch (error) {
        console.log("Error occurred during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
