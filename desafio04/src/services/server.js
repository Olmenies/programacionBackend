// Imports
const express = require('express')

// App definition
const app = express();

// Magic lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main route definition
const mainRoute = require('../routes/index');

// Middleware
// Disponibilizations
// Main route usage
app.use('/api', mainRoute);

// Exports
module.exports = app;