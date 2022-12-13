"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./services/server"));
// Constants
const PORT = process.env.PORT || 8080;
// Server listener
server_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
