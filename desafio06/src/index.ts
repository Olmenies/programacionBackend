// Imports
import Server from "./services/server";
import initWsServer from "./services/sockets";

// Port definition
const PORT = process.env.PORT || 8080;

// Server listener
Server.listen(PORT, () => {
  initWsServer(Server);
  console.log(`Server working listening to port ${PORT}`);
});
