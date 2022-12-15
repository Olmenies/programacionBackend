"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const prodsController_1 = __importDefault(require("../controller/prodsController"));
const uuid_1 = require("uuid");
const config_1 = __importDefault(require("../config"));
// Constants
const isAdmin = config_1.default.isAdmin;
// Route definition
const prodsRoute = (0, express_1.Router)();
// Middleware
const checkIfAdmin = (req, res, next) => {
    if (!config_1.default.isAdmin) {
        res
            .status(401)
            .json({ msg: "User is not authorized to perform this acction" });
    }
    next();
};
// Endpoints
prodsRoute.get("/", (req, res) => {
    const data = prodsController_1.default.getAllProds();
    res.json(Object.assign({}, data));
});
prodsRoute.get("/:id", (req, res) => {
    const id = req.params.id;
    const selectedProduct = prodsController_1.default.getProdById(id);
    selectedProduct
        ? res.status(200).json({ data: selectedProduct })
        : res.status(404).json({ data: "Producto no encontrado" });
});
prodsRoute.post("/", checkIfAdmin, (req, res) => {
    const newProd = Object.assign({ id: (0, uuid_1.v4)(), timestamp: new Date() }, req.body);
    prodsController_1.default.saveProd(newProd);
    res.status(201).json({ msg: "Product added" });
});
prodsRoute.put("/:id", checkIfAdmin, (req, res) => {
    const id = req.params.id;
    const data = req.body;
    prodsController_1.default.updateProdByID(id, data);
    res.status(201).json({ msg: "Product updated" });
});
prodsRoute.delete("/:id", checkIfAdmin, (req, res) => {
    const id = req.params.id;
    prodsController_1.default.deleteProdById(id);
    res.status(200).json({ msg: "Product deleted" });
});
// Exports
exports.default = prodsRoute;
