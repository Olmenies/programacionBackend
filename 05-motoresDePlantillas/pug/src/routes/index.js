// Imports
const { Router } = require('express');

// Main route
const mainRoute = Router();

// Other routes
const productsRoute = require('./productsRoute');
mainRoute.use('/products', productsRoute);

// Debug endpoints
mainRoute.get('/', (req, res) => {
    console.log('You\'re at /api');
    res.json({ msg: 'You\'re at /api' })
});

// Exports
module.exports = mainRoute;