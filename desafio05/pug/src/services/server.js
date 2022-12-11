// Imports
const express = require('express');
const path = require('path');

// Constants
const viewsPath = path.resolve(__dirname, '../../views');

// App definition
const app = express();

// App configuration
app.set('view engine', 'pug');
app.set('views', viewsPath);

// Two magic lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Disponibilizations
app.use('/public', express.static('public'));

// Main route import & usage
const mainRoute = require('../routes/index');
app.use('/api', mainRoute);

// Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

// Debug endpoints
app.use('/', (req, res) => {
    res.status(200).json({ msg: 'You\'re at /' });
});

// Exports
module.exports = app;

