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
    res.json({ msg: carts });
});
cartRoute.post("/", (req, res) => {
    cartController_1.default.createNewCart();
    res.json({ msg: "You made a POST to /api/cart" });
});
cartRoute.get("/:id/products", (req, res) => {
    const id = req.params.id;
    const prods = cartController_1.default.listCartProds(id);
    res.json({ msg: prods });
});
cartRoute.post("/:id/:product", (req, res) => {
    const id = req.params.id;
    const prod = req.params.product;
    const selectedProd = prodsController_1.default.getProdById(prod);
    cartController_1.default.addProdToCart(id, selectedProd);
    res.json({ msg: "You made a POST to /:id/:product" });
});
cartRoute.delete("/:id", (req, res) => {
    const id = req.params.id;
    cartController_1.default.deleteCartbyId(id);
    res.json({ msg: 'You made a DELETE to /:id' });
});
// Exports
exports.default = cartRoute;
// Prod - 4e6569b1-18ce-4ab9-8b18-a2a8410515aa
