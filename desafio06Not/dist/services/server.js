"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("../routes"));
// Constants
const viewsPath = path_1.default.resolve(__dirname, "../../views");
// App definition
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
// App configuration
app.set("view engine", "pug");
app.set("views", viewsPath);
// Disponibilizations
app.use("/", express_1.default.static("public"));
// Two magic lines
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Debuggin endpoints
app.use("/api", routes_1.default);
exports.default = httpServer;
