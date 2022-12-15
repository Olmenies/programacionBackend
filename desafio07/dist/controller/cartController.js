"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Constants
const cartFile = path_1.default.resolve(__dirname, "../../data/carts.json");
// Class
class Cart {
    constructor(id = (0, uuid_1.v4)(), timestamp = Date().toString(), prods = []) {
        this.id = id;
        this.timestamp = timestamp;
        this.prods = prods;
    }
}
// Controller
class CartController {
    constructor(carts = []) {
        this.carts = carts;
    }
    ;
    createNewCart() {
        this.carts.push(new Cart());
    }
    listAllCarts() {
        return this.carts;
    }
    listCartProds(id) {
        const selectedCart = this.carts.find(el => el.id === id);
        return selectedCart ? selectedCart.prods : undefined;
    }
    addProdToCart(id, prod) {
        console.log(id);
        console.log(prod);
        const selectedCart = this.carts.find(el => el.id === id);
        if (selectedCart) {
            if (prod) {
                selectedCart.prods.push(prod);
            }
        }
    }
}
// Controller initialization
const cartController = new CartController();
// Exports
exports.default = cartController;
