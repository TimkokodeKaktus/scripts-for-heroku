const express = require('express');
const router = express.Router()

const product = require('../models/product');

router.get('/', (request, response) => {
    product.find()
        .then(products => response.json(products))
        .catch(err => console.log(err));
});

//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = new User({name: userName, age: userAge});


router.post('/', (request, response) => {
    const { name, image_url, description, price } = request.body;

    console.log(request.body.name);
    console.log(request.body.image_url);
    console.log(request.body.description);
    console.log(request.body.price);

    const newProduct = new product({
        name: name,
        image_url: image_url,
        description: description,
        price: price
    });

    newProduct.save()
        .then(() => response.json({
            message: "Created product successfully"
        }))
        .catch(err => response.status(400).json({
            error: err,
            message: "Error creating product"
        }));
});
module.exports = router;