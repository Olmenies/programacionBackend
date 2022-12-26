"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("../routes"));
// Constants
const viewsPath = path_1.default.resolve(__dirname, "../../views");
// App definition
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
// Two magic lines
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// App configuration
app.set("views engine", "pug");
app.set("views", viewsPath);
// Disponibilizations
app.use("/", express_1.default.static("public"));
// Main route usage
app.use("/api", routes_1.default);
//Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
});
// Debugging endpoints
app.get("/", (req, res) => {
    //res.json({ msg: "You made a GET to /" });
    res.redirect('/api/products');
});
exports.default = httpServer;
