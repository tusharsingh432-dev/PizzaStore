const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const razorpay = require("razorpay");

const instance = new razorpay({
    key_id: "rzp_test_Q9SLlfSgFo7Xp9",
    key_secret: "q8aEqeIJrnNWUzrW4ObQV39v",
});
router.post("/createOrder", async (req, res) => {
    const { payable } = req.body;

    var option = {
        amount: payable * 100,
        currency: "INR",
        receipt: uuidv4(),
    };
    instance.orders.create(option, function (error, order) {
        if (error)
            return res.send(500).json({ message: error });
        res.json(order.id);
    });
});

module.exports = router;