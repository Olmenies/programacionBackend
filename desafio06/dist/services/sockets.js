"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWsServer = void 0;
const socket_io_1 = require("socket.io");
//Ws init
const initWsServer = (server) => {
    const io = new socket_io_1.Server(server);
    console.log("I'm initWsServer");
    io.on("connection", (socket) => {
        console.log('New client connected!');
        //console.log(`Client socket id: ${socket.client.id}`);
        console.log(`Sever socket id: ${socket.id}`);
        socket.on("messageToServer", (dataReceived) => {
            console.log(dataReceived);
            const data = {
                msg: dataReceived,
                //user: socket.client.id,
                user: socket.id
            };
            io.emit('broadcastMessage', data);
        });
    });
    return io;
};
exports.initWsServer = initWsServer;
