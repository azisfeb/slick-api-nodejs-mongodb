const _ = require('lodash')
const Product = require('../models/product')


const product = app => {
    //create
    app.post('/api/products', (req, res) => {
        const newProduct = new Product(req.body)
        newProduct
        .save()
        .then( () => {
            res.json({
                "info": "product created"
            })
        })
        .catch(err => {
            console.log(err)
        })
    })

    //read
    app.get('/api/products', (req, res) => {
        Product
        .find()
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            console.log(err)
        })
    })

    //update
    app.put('/api/products/:id', (req, res) => {
        Product.updateOne({ _id: req.params.id }, req.body)
        .then( () => {
            res.json({ "info": "product updated"})
        })
        .catch(err => {
            console.log(err)
        })
       
    })

    //delete
    app.delete('/api/products/:id', (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then( () => {
            res.json({ "info": "product removed"}) 
        })
        .catch(err => {
            console.log(err)
        })
    })
}

module.exports = product 