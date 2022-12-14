// Imports
import { Router } from "express";
import prodsController from "../controller/prodsController";
import { v4 as uuidv4 } from "uuid";

// Constants

// Route definition
const prodsRoute = Router();

// Endpoints
prodsRoute.get("/", (req, res) => {
  const data = prodsController.getAllProds();
  res.json({ ...data });
});

prodsRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.headers.isAdmin);

  const selectedProduct = prodsController.getProdById(id);
  selectedProduct
    ? res.status(200).json({ data: selectedProduct })
    : res.status(404).json({ data: "Producto no encontrado" });
});

prodsRoute.post("/", (req, res) => {
  const newProd = {
    id: uuidv4(),
    timestamp: new Date(),
    ...req.body,
  };

  prodsController.save(newProd);

  res.json({ msg: "Hola" });
});

prodsRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  prodsController.updateProdByID(id, data);
  res.json({ msg: "WIP" });
});

prodsRoute.delete('/:id', (req, res) => {
  const id = req.params.id;
  prodsController.deleteProd(id)
  res.json({msg:'You made a DELETE to /api/products/:id'});
});

// Exports
export default prodsRoute;
