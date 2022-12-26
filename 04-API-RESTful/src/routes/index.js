// Imports
const {Router} = require('express');

// Main route definition
const mainRoute = Router();

// Other routes definition
const productsRoute = require('./productsRoute');

// Other routes usage
mainRoute.use('/products', productsRoute);

// Exports
module.exports = mainRoute;