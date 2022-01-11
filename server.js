const express = require('express');
const Pizza = require('./models/pizzaModel')
const db = require('./db.js');
const app = express();
const pizzaRouter = require('./routes/pizzaRoutes');
const userRouter = require('./routes/userRoutes');
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Running ///")
})

app.use('/api/pizzas', pizzaRouter);
app.use('/api/users', userRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is Running...`)) 