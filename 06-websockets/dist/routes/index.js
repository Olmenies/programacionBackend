"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const productsRoute_1 = __importDefault(require("./productsRoute"));
// Main route
const mainRoute = (0, express_1.Router)();
// Other routes
mainRoute.use("/products", productsRoute_1.default);
//Debug endpoints
mainRoute.get("/", (req, res) => {
    res.json({ msg: "You made a GET to /api" });
});
// Exports
exports.default = mainRoute;
