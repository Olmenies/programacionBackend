// Imports
import Server from "./services/server";
import initWsServer from "./services/prodsSockets";

// Port definition
const PORT = process.env.PORT || 8080;

// Server listener
Server.listen(PORT, () => {
  initWsServer(Server);
  console.log(`Server workig listening to port ${PORT}`);
});
