/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = {\n    isAdmin: true,\n    port: process.env.port || 8080\n};\n\n\n//# sourceURL=webpack://desafio06/./src/config/index.ts?");

/***/ }),

/***/ "./src/controller/cartController.ts":
/*!******************************************!*\
  !*** ./src/controller/cartController.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _CartController_instances, _CartController_writeToFs;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\n// To do: Add return codes\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\n// Constants\nconst cartsFile = path_1.default.resolve(__dirname, \"../../data/carts.json\");\n// Class\nclass Cart {\n    constructor(id = (0, uuid_1.v4)(), timestamp = Date().toString(), prods = []) {\n        this.id = id;\n        this.timestamp = timestamp;\n        this.prods = prods;\n    }\n}\n// Controller\nclass CartController {\n    constructor(carts = []) {\n        this.carts = carts;\n        _CartController_instances.add(this);\n    }\n    // Async function used to bring the values saved on fs when Products is initialized\n    initialize() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const data = JSON.parse(yield fs_1.default.promises.readFile(cartsFile, \"utf-8\"));\n                this.carts = [...data];\n            }\n            catch (error) {\n                console.log(error);\n            }\n        });\n    }\n    createNewCart() {\n        this.carts.push(new Cart());\n        __classPrivateFieldGet(this, _CartController_instances, \"m\", _CartController_writeToFs).call(this, this.carts);\n    }\n    listAllCarts() {\n        return this.carts;\n    }\n    listCartProds(id) {\n        const selectedCart = this.carts.find((el) => el.id === id);\n        return selectedCart ? selectedCart.prods : undefined;\n    }\n    addProdToCart(id, prod) {\n        console.log(id);\n        console.log(prod);\n        const selectedCart = this.carts.find((el) => el.id === id);\n        if (selectedCart) {\n            if (prod) {\n                selectedCart.prods.push(prod);\n            }\n            __classPrivateFieldGet(this, _CartController_instances, \"m\", _CartController_writeToFs).call(this, this.carts);\n        }\n    }\n    deleteCartbyId(id) {\n        const index = this.carts.map((el) => el.id).indexOf(id);\n        //const selectedProduct = this.prods.find((el) => el.id === id);\n        this.carts.splice(index - 1, 1);\n        __classPrivateFieldGet(this, _CartController_instances, \"m\", _CartController_writeToFs).call(this, this.carts);\n    }\n    deleteCartProdByID(cartId, prodId) {\n        const selectedCart = this.carts.find((el) => el.id === cartId);\n        if (selectedCart) {\n            const index = selectedCart.prods.map((el) => el.id).indexOf(prodId);\n            if (index) {\n                selectedCart.prods.splice(index - 1, 1);\n                __classPrivateFieldGet(this, _CartController_instances, \"m\", _CartController_writeToFs).call(this, this.carts);\n            }\n        }\n    }\n}\n_CartController_instances = new WeakSet(), _CartController_writeToFs = function _CartController_writeToFs(data) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            yield fs_1.default.promises.writeFile(cartsFile, JSON.stringify(data));\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n};\n// Controller initialization\nconst cartController = new CartController();\ncartController.initialize();\n// Exports\nexports[\"default\"] = cartController;\n\n\n//# sourceURL=webpack://desafio06/./src/controller/cartController.ts?");

/***/ }),

/***/ "./src/controller/prodsController.ts":
/*!*******************************************!*\
  !*** ./src/controller/prodsController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _ProductsController_instances, _ProductsController_writeToFs;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\n// Constants\nconst prodsFile = path_1.default.resolve(__dirname, \"../../data/products.json\");\n// Controller\nclass ProductsController {\n    constructor(prods = []) {\n        this.prods = prods;\n        _ProductsController_instances.add(this);\n    }\n    // Async function used to bring the values saved on fs when Products is initialized\n    initialize() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const data = JSON.parse(yield fs_1.default.promises.readFile(prodsFile, \"utf-8\"));\n                this.prods = [...data];\n            }\n            catch (error) {\n                console.log(error);\n            }\n        });\n    }\n    getAllProds() {\n        return this.prods;\n    }\n    getProdById(id) {\n        const selectedProduct = this.prods.find((el) => el.id === id);\n        return selectedProduct;\n    }\n    updateProdByID(id, data) {\n        //this.prods.map(el => el.id).indexOf(id);\n        const index = this.prods.map((el) => el.id).indexOf(id);\n        const selectedProduct = this.prods.find((el) => el.id === id);\n        if (selectedProduct) {\n            const updatedProduct = Object.assign(Object.assign({}, selectedProduct), data);\n            this.prods[index] = updatedProduct;\n            __classPrivateFieldGet(this, _ProductsController_instances, \"m\", _ProductsController_writeToFs).call(this, this.prods);\n        }\n    }\n    saveProd(data) {\n        this.prods.push(data);\n        __classPrivateFieldGet(this, _ProductsController_instances, \"m\", _ProductsController_writeToFs).call(this, this.prods);\n    }\n    deleteProdById(id) {\n        const index = this.prods.map((el) => el.id).indexOf(id);\n        //const selectedProduct = this.prods.find((el) => el.id === id);\n        this.prods.splice(index - 1, 1);\n    }\n}\n_ProductsController_instances = new WeakSet(), _ProductsController_writeToFs = function _ProductsController_writeToFs(data) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            yield fs_1.default.promises.writeFile(prodsFile, JSON.stringify(data));\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n};\n// Controller initialization\nconst prodsController = new ProductsController();\nprodsController.initialize();\n// Exports\nexports[\"default\"] = prodsController;\n\n\n//# sourceURL=webpack://desafio06/./src/controller/prodsController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst server_1 = __importDefault(__webpack_require__(/*! ./services/server */ \"./src/services/server.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\n// Server listener\nserver_1.default.listen(config_1.default.port, () => {\n    console.log(`Server running on port ${config_1.default.port}`);\n});\n\n\n//# sourceURL=webpack://desafio06/./src/index.ts?");

/***/ }),

/***/ "./src/routes/cartRoute.ts":
/*!*********************************!*\
  !*** ./src/routes/cartRoute.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst cartController_1 = __importDefault(__webpack_require__(/*! ../controller/cartController */ \"./src/controller/cartController.ts\"));\nconst prodsController_1 = __importDefault(__webpack_require__(/*! ../controller/prodsController */ \"./src/controller/prodsController.ts\"));\n// Constants\n// Route definition\nconst cartRoute = (0, express_1.Router)();\n// Endpoints\ncartRoute.get(\"/\", (req, res) => {\n    const carts = cartController_1.default.listAllCarts();\n    res.json(Object.assign({}, carts));\n});\ncartRoute.post(\"/\", (req, res) => {\n    cartController_1.default.createNewCart();\n    res.status(201).json({ msg: \"Cart created\" });\n});\ncartRoute.get(\"/:id/products\", (req, res) => {\n    const id = req.params.id;\n    const prods = cartController_1.default.listCartProds(id);\n    prods\n        ? res.status(200).json({ data: prods })\n        : res.status(404).json({ data: \"Cart not found\" });\n});\ncartRoute.post(\"/:id/products/:product\", (req, res) => {\n    const { id, product } = req.params;\n    const selectedProd = prodsController_1.default.getProdById(product);\n    if (selectedProd) {\n        cartController_1.default.addProdToCart(id, selectedProd);\n        res.status(200).json({ data: \"Product added\" });\n    }\n    else {\n        res.status(404).json({ data: \"Product not found\" });\n    }\n});\ncartRoute.delete(\"/:id\", (req, res) => {\n    const id = req.params.id;\n    cartController_1.default.deleteCartbyId(id);\n    res.status(200).json({ msg: \"You made a DELETE to /:id\" });\n});\ncartRoute.delete(\"/:id/products/:product\", (req, res) => {\n    const { id, product } = req.params;\n    cartController_1.default.deleteCartProdByID(id, product);\n    res.status(200).json({ msg: \"You made a DELETE to /:id/products/:product\" });\n});\n// Exports\nexports[\"default\"] = cartRoute;\n\n\n//# sourceURL=webpack://desafio06/./src/routes/cartRoute.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst cartRoute_1 = __importDefault(__webpack_require__(/*! ./cartRoute */ \"./src/routes/cartRoute.ts\"));\nconst prodsRoute_1 = __importDefault(__webpack_require__(/*! ./prodsRoute */ \"./src/routes/prodsRoute.ts\"));\n// Constants\n// Route definition\nconst mainRoute = (0, express_1.Router)();\n// Outer routes\nmainRoute.use('/products', prodsRoute_1.default);\nmainRoute.use('/cart', cartRoute_1.default);\n// Endpoints\nmainRoute.get('/', (req, res) => {\n    res.json({ msg: 'You made a GET to /api' });\n});\n// Exports\nexports[\"default\"] = mainRoute;\n\n\n//# sourceURL=webpack://desafio06/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/prodsRoute.ts":
/*!**********************************!*\
  !*** ./src/routes/prodsRoute.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst prodsController_1 = __importDefault(__webpack_require__(/*! ../controller/prodsController */ \"./src/controller/prodsController.ts\"));\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/config/index.ts\"));\n// Constants\nconst isAdmin = config_1.default.isAdmin;\n// Route definition\nconst prodsRoute = (0, express_1.Router)();\n// Middleware\nconst checkIfAdmin = (req, res, next) => {\n    if (!config_1.default.isAdmin) {\n        res\n            .status(401)\n            .json({ msg: \"User is not authorized to perform this acction\" });\n    }\n    next();\n};\n// Endpoints\nprodsRoute.get(\"/\", (req, res) => {\n    const data = prodsController_1.default.getAllProds();\n    res.status(200).json(Object.assign({}, data));\n});\nprodsRoute.get(\"/:id\", (req, res) => {\n    const id = req.params.id;\n    const selectedProduct = prodsController_1.default.getProdById(id);\n    selectedProduct\n        ? res.status(200).json({ data: selectedProduct })\n        : res.status(404).json({ data: \"Product not found\" });\n});\nprodsRoute.post(\"/\", checkIfAdmin, (req, res) => {\n    const newProd = Object.assign({ id: (0, uuid_1.v4)(), timestamp: new Date() }, req.body);\n    prodsController_1.default.saveProd(newProd);\n    res.status(201).json({ msg: \"Product added\" });\n});\nprodsRoute.put(\"/:id\", checkIfAdmin, (req, res) => {\n    const id = req.params.id;\n    const data = req.body;\n    prodsController_1.default.updateProdByID(id, data);\n    res.status(201).json({ msg: \"Product updated\" });\n});\nprodsRoute.delete(\"/:id\", checkIfAdmin, (req, res) => {\n    const id = req.params.id;\n    prodsController_1.default.deleteProdById(id);\n    res.status(200).json({ msg: \"Product deleted\" });\n});\n// Exports\nexports[\"default\"] = prodsRoute;\n\n\n//# sourceURL=webpack://desafio06/./src/routes/prodsRoute.ts?");

/***/ }),

/***/ "./src/services/server.ts":
/*!********************************!*\
  !*** ./src/services/server.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Imports\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\n// App defnition\nconst app = (0, express_1.default)();\n// Two magic lines\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: true }));\n// Main route\napp.use('/api', routes_1.default);\n// Endpoints endpoints\napp.use('*', (req, res) => {\n    res.status(404).json({ msg: '404 - Resource not found' });\n});\n// Exports\nexports[\"default\"] = app;\n\n\n//# sourceURL=webpack://desafio06/./src/services/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;