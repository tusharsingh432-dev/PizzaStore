const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://tushar:admin@cluster0.fbpq1.mongodb.net/pizzaStore';

console.log(Date.now());

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database Linked...');
})

db.on('error', () => {
    console.log('Error!!!');
})

module.exports = mongoose;