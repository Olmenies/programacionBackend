// Imports
import { Router } from "express";
import path from "path";

// Constants
const viewsPath = path.resolve(__dirname, "../../views");

// Route defnition
const routeSelectChat = Router();

// Route endpoints
routeSelectChat.use("/", (req, res) => {
  res.status(200).render(`${viewsPath}/components/selectChat.pug`);
});

// Exports
export default routeSelectChat;
