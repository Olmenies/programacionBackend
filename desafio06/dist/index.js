"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./services/server"));
const sockets_1 = __importDefault(require("./services/sockets"));
// Port definition
const PORT = process.env.PORT || 8080;
// Server listener
server_1.default.listen(PORT, () => {
    (0, sockets_1.default)(server_1.default);
    console.log(`Server working listening to port ${PORT}`);
});
