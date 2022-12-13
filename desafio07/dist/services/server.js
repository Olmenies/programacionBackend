"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
// App defnition
const app = (0, express_1.default)();
// Two magic lines
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Main route
app.use('/api', routes_1.default);
// Endpoints endpoints
app.use('/', (req, res) => {
    res.json({ msg: 'You made a GET to /' });
});
// Exports
exports.default = app;
