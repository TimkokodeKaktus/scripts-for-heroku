const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    image_url: String,
    description: String,
    price: String
},
    { versionKey: false }
);

module.exports = mongoose.model("product", productSchema);

// {name: String, age: Number}, {versionKey: false}