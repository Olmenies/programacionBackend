// Imports
import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import mainRoute from "../routes";

// Constants
const viewsPath = path.resolve(__dirname, "../../views");

// App definition
const app = express();
const httpServer = createServer(app);

// Two magic lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App configuration
app.set("views engine", "pug");
app.set("views", viewsPath);

// Disponibilizations
app.use("/", express.static("public"));

// Main route usage
app.use("/api", mainRoute);

//Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
});

// Debugging endpoints
app.get("/", (req, res) => {
  res.json({ msg: "You made a GET to /" });
});

export default httpServer;
