// Imports
import { Router } from "express";
import path from "path";

// Constants

// Route definition
const cartRoute = Router();

// Endpoints
cartRoute.get('/', (req, res) => {
  res.json({msg:'You made a GET to /api/cart'});
});

// Exports
export default cartRoute;