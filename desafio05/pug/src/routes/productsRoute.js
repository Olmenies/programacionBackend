// Imports
const { Router } = require('express');
const path = require('path');
const prodsController = require('../controller/prods');

// Constants
const viewsPath = path.resolve(__dirname, '../../views');

// Route definition
const productsRoute = Router();

// Endpoints
productsRoute.get('/', (req, res) => {
    console.log('You made a GET to /api/products');
    const data = prodsController.getAll();

    console.log(data);
    dynamicObject = {
        productsArray: data,
    }

    res.status(200).render(`${viewsPath}/index.pug`, dynamicObject);
});

productsRoute.post('/', (req, res) => {
    const data = req.body;
    prodsController.save(data);

    console.log('You made a POST to /api/products');
    res.redirect('/api/products');
});

// Exports
module.exports = productsRoute;