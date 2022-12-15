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
var _ProductsController_instances, _ProductsController_writeToFs;
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Constants
const prodsFile = path_1.default.resolve(__dirname, "../../data/products.json");
// Controller
class ProductsController {
    constructor(prods = []) {
        this.prods = prods;
        _ProductsController_instances.add(this);
    }
    // Async function used to bring the values saved on fs when Products is initialized
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = JSON.parse(yield fs_1.default.promises.readFile(prodsFile, "utf-8"));
                this.prods = [...data];
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAllProds() {
        return this.prods;
    }
    getProdById(id) {
        const selectedProduct = this.prods.find((el) => el.id === id);
        return selectedProduct;
    }
    updateProdByID(id, data) {
        //this.prods.map(el => el.id).indexOf(id);
        const index = this.prods.map((el) => el.id).indexOf(id);
        const selectedProduct = this.prods.find((el) => el.id === id);
        if (selectedProduct) {
            const updatedProduct = Object.assign(Object.assign({}, selectedProduct), data);
            this.prods[index] = updatedProduct;
            __classPrivateFieldGet(this, _ProductsController_instances, "m", _ProductsController_writeToFs).call(this, this.prods);
        }
    }
    saveProd(data) {
        this.prods.push(data);
        __classPrivateFieldGet(this, _ProductsController_instances, "m", _ProductsController_writeToFs).call(this, this.prods);
    }
    deleteProd(id) {
        const index = this.prods.map((el) => el.id).indexOf(id);
        //const selectedProduct = this.prods.find((el) => el.id === id);
        this.prods.splice(index - 1, 1);
    }
}
_ProductsController_instances = new WeakSet(), _ProductsController_writeToFs = function _ProductsController_writeToFs(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.default.promises.writeFile(prodsFile, JSON.stringify(data));
        }
        catch (error) {
            console.log(error);
        }
    });
};
// Controller initialization
const prodsController = new ProductsController();
prodsController.initialize();
// Exports
exports.default = prodsController;
