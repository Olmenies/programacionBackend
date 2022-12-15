"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const cartController_1 = __importDefault(require("../controller/cartController"));
const prodsController_1 = __importDefault(require("../controller/prodsController"));
// Constants
// Route definition
const cartRoute = (0, express_1.Router)();
// Endpoints
cartRoute.get("/", (req, res) => {
    const carts = cartController_1.default.listAllCarts();
    res.json(Object.assign({}, carts));
});
cartRoute.post("/", (req, res) => {
    cartController_1.default.createNewCart();
    res.status(201).json({ msg: "Cart created" });
});
cartRoute.get("/:id/products", (req, res) => {
    const id = req.params.id;
    const prods = cartController_1.default.listCartProds(id);
    prods
        ? res.status(200).json({ data: prods })
        : res.status(404).json({ data: "Cart not found" });
});
cartRoute.post("/:id/products/:product", (req, res) => {
    const { id, product } = req.params;
    const selectedProd = prodsController_1.default.getProdById(product);
    if (selectedProd) {
        cartController_1.default.addProdToCart(id, selectedProd);
        res.status(200).json({ data: "Product added" });
    }
    else {
        res.status(404).json({ data: "Product not found" });
    }
});
cartRoute.delete("/:id", (req, res) => {
    const id = req.params.id;
    cartController_1.default.deleteCartbyId(id);
    res.status(200).json({ msg: "You made a DELETE to /:id" });
});
cartRoute.delete("/:id/products/:product", (req, res) => {
    const { id, product } = req.params;
    cartController_1.default.deleteCartProdByID(id, product);
    res.status(200).json({ msg: "You made a DELETE to /:id/products/:product" });
});
// Exports
exports.default = cartRoute;
