"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const cartRoute_1 = __importDefault(require("./cartRoute"));
const prodsRoute_1 = __importDefault(require("./prodsRoute"));
// Constants
// Route definition
const mainRoute = (0, express_1.Router)();
// Outer routes
mainRoute.use('/products', prodsRoute_1.default);
mainRoute.use('/cart', cartRoute_1.default);
// Endpoints
mainRoute.get('/', (req, res) => {
    res.json({ msg: 'You made a GET to /api' });
});
// Exports
exports.default = mainRoute;
