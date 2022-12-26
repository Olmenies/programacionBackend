// Imports
import { Router } from "express";
import path from "path";
import prodsController from "../controller/prod";

// Constants
const viewsPath = path.resolve(__dirname, "../../views");

// Route definition
const productsRoute = Router();

// Endpoints
productsRoute.get("/", (req, res) => {
  const data = prodsController.getAll();

  const dynamicObject = {
    productsArray: data,
  };

  res.status(200).render(`${viewsPath}/index.pug`, dynamicObject);
});

/*
productsRoute.post("/", (req, res) => {
  const data = req.body;
  prodsController.save(data);

  res.redirect("/api/products");
});
*/
// Exports
export default productsRoute;
