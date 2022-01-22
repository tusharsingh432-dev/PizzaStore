const express = require('express');
const Pizza = require('./models/pizzaModel')
const db = require('./db.js');
const app = express();
const path = require('path');
const pizzaRouter = require('./routes/pizzaRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const paymentRouter = require('./routes/paymentRoutes');
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Server Running ///")
// })
app.use('/api/orders', orderRouter);
app.use('/api/pizzas', pizzaRouter);
app.use('/api/users', userRouter);
app.use('/api/payments', paymentRouter);

if (process.env.NODE_ENV == "production") {
    app.use('/', express.static("client/build"));
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/client/build/index.html'));
    })
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is Running...`)) 