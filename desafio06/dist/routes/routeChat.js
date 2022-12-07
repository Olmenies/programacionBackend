"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
// Constants
const viewsPath = path_1.default.resolve(__dirname, "../../views");
// Route defnition
const routeChat = (0, express_1.Router)();
// Route endpoints
routeChat.use("/", (req, res) => {
    res.status(200).render(`${viewsPath}/components/chat.pug`);
});
// Exports
exports.default = routeChat;
