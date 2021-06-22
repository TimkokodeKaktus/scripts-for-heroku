const Product = require('../models/product.model')
const router = require('express').Router()

router.route('/new').post(async (request, response) => {
    const newProduct = new Product(request.body)
    await newProduct.save()
        .then(product => response.json(product))
        .catch(err => request.status(400).json("Error! " + err))
})

router.route('/').get(async (request, response) => {
    await Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => response.status(400).json('Error! ' + err))
})

router.route('/update/:id').put(async (request, response) => {
    await Product.findByIdAndUpdate(request.params.id, request.body)
        .then(product => response.json('Success! Product updated.'))
        .catch(err => response.status(400).json('Error! ' + err))
})

router.route('/delete/:id').delete(async (request, response) => {
    await Product.deleteOne({ _id: request.params.id })
        .then(product => response.json('Success! Productt deleted.'))
        .catch(err => response.status(400).json('Error! ' + err))
})

module.exports = router