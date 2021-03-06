const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({

    name: {
        type: 'string',
        require
    },
    varients: { type: Array, default: ['small', 'medium', 'large'] },
    prices: [],
    category: {
        type: 'string',
        require
    },
    image: { type: 'string', require },
    description: { type: 'string', require },
}, { timestamps: true })

const pizzaModel = mongoose.model('pizza', pizzaSchema);

module.exports = pizzaModel;