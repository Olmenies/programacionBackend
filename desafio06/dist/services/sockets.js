"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const prod_1 = __importDefault(require("../controller/prod"));
// Ws init --> Convert this to class
const initWsServer = (server) => {
    const io = new socket_io_1.Server(server);
    io.on("connection", (socket) => {
        console.log("New client connected");
        console.log(`Socket id: ${socket.id}`);
        io.emit("broadcastMessage", {
            email: "boty@coolbot.com",
            message: "Hello!",
            date: new Date().toLocaleDateString("sp-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
        });
        socket.on("prodsFormSubmitted", (socket) => {
            prod_1.default.save(socket);
            io.emit("updateProdsTable", socket);
        });
        socket.on("sendNewMessage", (socket) => {
            io.emit("broadcastMessage", socket);
        });
    });
    return io;
};
// Exports
exports.default = initWsServer;
