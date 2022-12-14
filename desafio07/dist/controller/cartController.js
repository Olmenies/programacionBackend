"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// Constants
const cartFile = path_1.default.resolve(__dirname, '../../data/carts.json');
// Class
class Cart {
    constructor(prods) {
        this.prods = prods;
    }
}
// Class initializations
// Exports
exports.default = Cart;
