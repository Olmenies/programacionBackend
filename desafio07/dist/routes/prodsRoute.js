"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const prodsController_1 = __importDefault(require("../controller/prodsController"));
const uuid_1 = require("uuid");
// Constants
// Route definition
const prodsRoute = (0, express_1.Router)();
// Endpoints
prodsRoute.get("/", (req, res) => {
    const data = prodsController_1.default.getAllProds();
    res.json(Object.assign({}, data));
});
prodsRoute.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.headers.isAdmin);
    const selectedProduct = prodsController_1.default.getProdById(id);
    selectedProduct
        ? res.status(200).json({ data: selectedProduct })
        : res.status(404).json({ data: "Producto no encontrado" });
});
prodsRoute.post("/", (req, res) => {
    const newProd = Object.assign({ id: (0, uuid_1.v4)(), timestamp: new Date() }, req.body);
    prodsController_1.default.save(newProd);
    res.json({ msg: "Hola" });
});
prodsRoute.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    prodsController_1.default.updateProdByID(id, data);
    res.json({ msg: "WIP" });
});
// Exports
exports.default = prodsRoute;
