// Imports
import { Router } from "express";
import productsRoute from "./productsRoute";

// Main route
const mainRoute = Router();

// Other routes
mainRoute.use("/products", productsRoute);

//Debug endpoints
mainRoute.get("/", (req, res) => {
  res.json({ msg: "You made a GET to /api" });
});

// Exports
export default mainRoute;