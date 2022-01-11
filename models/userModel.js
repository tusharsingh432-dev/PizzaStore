const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        require
    },
    email: {
        type: 'string', require
    },
    password: {
        type: 'string', require
    },
    isAdmin: {
        type: 'boolean',
        default: false,
        require
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema);