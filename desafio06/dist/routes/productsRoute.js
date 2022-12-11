"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const prod_1 = __importDefault(require("../controller/prod"));
// Constants
const viewsPath = path_1.default.resolve(__dirname, "../../views");
// Route definition
const productsRoute = (0, express_1.Router)();
// Endpoints
productsRoute.get("/", (req, res) => {
    const data = prod_1.default.getAll();
    const dynamicObject = {
        productsArray: data,
    };
    res.status(200).render(`${viewsPath}/index.pug`, dynamicObject);
});
/*
productsRoute.post("/", (req, res) => {
  const data = req.body;
  prodsController.save(data);

  res.redirect("/api/products");
});
*/
// Exports
exports.default = productsRoute;
