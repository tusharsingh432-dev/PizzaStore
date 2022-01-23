const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
    const user = req.body;
    // console.log(user);
    const newUser = new User(user);
    try {
        const response = await newUser.save();
        res.send('Sucess');
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err });
    }
})

router.post('/login', async (req, res) => {
    const user = req.body;
    try {
        const response = await User.find({ ...user });
        if (response.length == 0) {
            throw "No user found"
        }
        console.log(response[0]);
        const newUser = {
            name: response[0].name,
            email: response[0].email,
            isAdmin: response[0].isAdmin,
            createdAt: response[0].createdAt,
            updatedAt: response[0].updatedAt
        }
        console.log(newUser);
        res.send(newUser)
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err });
    }
})

module.exports = router;