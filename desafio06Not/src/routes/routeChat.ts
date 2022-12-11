// Imports
import { Router } from "express";
import path from "path";

// Constants
const viewsPath = path.resolve(__dirname, "../../views");

// Route defnition
const routeChat = Router();

// Route endpoints
routeChat.use("/", (req, res) => {
  res.status(200).render(`${viewsPath}/components/chat.pug`);
});

// Exports
export default routeChat;
