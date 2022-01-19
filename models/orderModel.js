const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: 'string', require
    },
    email: {
        type: 'string', require
    },
    userId: { type: 'string', require },
    orderItems: [],
    orderAmount: { type: Number, require },
    shippingAddress: { type: Object },
    isDelivered: { type: 'boolean', require, default: false },
    transactionId: { type: 'string', require }
}, {
    timestamps: true
})

module.exports = mongoose.model("orders", orderSchema); 