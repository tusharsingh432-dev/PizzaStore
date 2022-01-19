const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51KHtU9SEXCGwuU0mJdrhLss1QYBBQzgdp6vhRMCz650jwjBfVnvAyKXKroCfAVnvqr5SwYBF1GnTptLfPZgG1WJT00o3jTwJcf');
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel');

router.post('/placeOrder', async (req, res) => {
    console.log('called');
    const { token, payable, curUser, cartItems } = req.body;
    console.log(req.body)
    try {
        const newOrder = new Order({
            name: curUser.name,
            email: curUser.email,
            userId: curUser._id,
            orderItems: cartItems,
            orderAmount: payable,
            transactionId: uuidv4()
        })

        newOrder.save()

        // if (payment) {
        res.send('payment done');
        // } else {
        // throw 'payment failed';
        // }
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err });
    }
})

router.post('/getAllOrders', async (req, res) => {
    const { userId } = req.body;
    // console.log(' || ')  
    console.log(req.body)
    try {
        const orders = await Order.find({ userId });
        res.send(orders);
    } catch (err) {
        return res.status(404).json({ message: err });
    }
})


module.exports = router;
