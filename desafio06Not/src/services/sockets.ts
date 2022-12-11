//Imports
import { Server as httpServer } from "http";
import { Server } from "socket.io";

//Ws init
const initWsServer = (server: httpServer) => {
  const io = new Server(server);
  console.log("I'm initWsServer");

  io.on("connection", (socket) => {
    console.log('New client connected!');
    //console.log(`Client socket id: ${socket.client.id}`);
    console.log(`Sever socket id: ${socket.id}`);

    io.emit('newClientJoinedRoom', socket.id);
    
    socket.on("messageToServer", (dataReceived) => {
      console.log(dataReceived);
      const data = {
        msg: dataReceived,
        //user: socket.client.id,
        user: socket.id
      }
      io.emit('broadcastMessage', data);
    });
  });

  return io;
};

//Exports
export { initWsServer };
