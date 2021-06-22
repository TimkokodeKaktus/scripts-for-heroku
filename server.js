const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

const source = process.env.ATLAS_CONNECTION

mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected");
})

const productRoutes = require('./controllers/product.controller')
app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Successfully served on port: ${PORT}.`);
})
