// Imports
import { Server as httpServer } from "http";
import { Server } from "socket.io";
import prodsController from "../controller/prod";

// Ws init --> Convert this to class
const initWsServer = (server: httpServer) => {
  const io = new Server(server);

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
      prodsController.save(socket);
      io.emit("updateProdsTable", socket);
    });

    socket.on("sendNewMessage", (socket) => {
      io.emit("broadcastMessage", socket);
    });
  });

  return io;
};

// Exports
export default initWsServer;
