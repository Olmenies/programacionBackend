// Imports
import {Server as httpServer} from 'http';
import {Server} from 'socket.io';
import prodsController from "../controller/prod";

// Ws init
const initWsServer = (server : httpServer) => {
  const io = new Server(server);
  console.log('I\'m initWsServer');

  io.on('connection', socket => {
    console.log('New client connected');
    console.log(`Socket id: ${socket.id}`);

    socket.on('prodsFormSubmitted', socket => {
      console.log(socket);
      prodsController.save(socket);
      io.emit('updateProdsTable', socket);
    });
  });

  return io;
}

// Exports
export default initWsServer;