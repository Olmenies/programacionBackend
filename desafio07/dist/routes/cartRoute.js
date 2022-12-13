"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
// Constants
// Route definition
const cartRoute = (0, express_1.Router)();
// Endpoints
cartRoute.get('/', (req, res) => {
    res.json({ msg: 'You made a GET to /api/cart' });
});
// Exports
exports.default = cartRoute;
