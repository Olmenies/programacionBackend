"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./services/server"));
const prodsSockets_1 = __importDefault(require("./services/prodsSockets"));
// Port definition
const PORT = process.env.PORT || 8080;
// Server listener
server_1.default.listen(PORT, () => {
    (0, prodsSockets_1.default)(server_1.default);
    console.log(`Server workig listening to port ${PORT}`);
});
