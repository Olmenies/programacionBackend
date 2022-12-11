// Imports
import { createServer } from "http";
import express from "express";
import path from "path";
import mainRoute from "../routes";

// Constants
const viewsPath = path.resolve(__dirname, "../../views");

// App definition
const app = express();
const httpServer = createServer(app);

// App configuration
app.set("view engine", "pug");
app.set("views", viewsPath);

// Disponibilizations
app.use("/", express.static("public"));

// Two magic lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debuggin endpoints
app.use("/api",mainRoute);

export default httpServer;