"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _CartController_instances, _CartController_writeToFs;
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Constants
const cartsFile = path_1.default.resolve(__dirname, "../../data/carts.json");
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
        _CartController_instances.add(this);
    }
    // Async function used to bring the values saved on fs when Products is initialized
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = JSON.parse(yield fs_1.default.promises.readFile(cartsFile, "utf-8"));
                this.carts = [...data];
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createNewCart() {
        this.carts.push(new Cart());
        __classPrivateFieldGet(this, _CartController_instances, "m", _CartController_writeToFs).call(this, this.carts);
    }
    listAllCarts() {
        return this.carts;
    }
    listCartProds(id) {
        const selectedCart = this.carts.find((el) => el.id === id);
        return selectedCart ? selectedCart.prods : undefined;
    }
    addProdToCart(id, prod) {
        console.log(id);
        console.log(prod);
        const selectedCart = this.carts.find((el) => el.id === id);
        if (selectedCart) {
            if (prod) {
                selectedCart.prods.push(prod);
            }
            __classPrivateFieldGet(this, _CartController_instances, "m", _CartController_writeToFs).call(this, this.carts);
        }
    }
    deleteCartbyId(id) {
        const index = this.carts.map((el) => el.id).indexOf(id);
        //const selectedProduct = this.prods.find((el) => el.id === id);
        this.carts.splice(index - 1, 1);
        __classPrivateFieldGet(this, _CartController_instances, "m", _CartController_writeToFs).call(this, this.carts);
    }
}
_CartController_instances = new WeakSet(), _CartController_writeToFs = function _CartController_writeToFs(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.default.promises.writeFile(cartsFile, JSON.stringify(data));
        }
        catch (error) {
            console.log(error);
        }
    });
};
// Controller initialization
const cartController = new CartController();
cartController.initialize();
// Exports
exports.default = cartController;
