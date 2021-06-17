const express = require('express');
const router = express.Router()

const product = require('../models/product');

router.get('/', async (request, response) => {
    await product.find()
        .then(products => response.json(products))
        .catch(err => console.log(err));
});

router.post('/', async (request, response) => {
    const { name, image_url, description, price } = request.body;

    const newProduct = new product({
        name: name,
        image_url: image_url,
        description: description,
        price: price
    });

    await newProduct.save()
        .then(() => response.json({
            message: "Created product successfully"
        }))
        .catch(err => response.status(400).json({
            error: err,
            message: "Error creating product"
        }));
});
module.exports = router;