const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, requierd: true },
    image_url: { type: String, requierd: true },
    description: { type: String, requierd: true },
    price: { type: Number, min: 0 }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product