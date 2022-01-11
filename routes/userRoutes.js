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

module.exports = router;