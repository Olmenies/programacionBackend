"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./services/server"));
const config_1 = __importDefault(require("./config"));
// Server listener
server_1.default.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
