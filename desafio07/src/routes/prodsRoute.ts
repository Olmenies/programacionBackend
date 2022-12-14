// Imports
import { NextFunction, Request, Response, Router } from "express";
import prodsController from "../controller/prodsController";
import { v4 as uuidv4 } from "uuid";
import Config from "../config";

// Constants
const isAdmin = Config.isAdmin;

// Route definition
const prodsRoute = Router();

// Middleware
const checkIfAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!Config.isAdmin) {
    res
      .status(401)
      .json({ msg: "User is not authorized to perform this acction" });
  }

  next();
};

// Endpoints
prodsRoute.get("/", (req, res) => {
  const data = prodsController.getAllProds();
  res.json({ ...data });
});

prodsRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  const selectedProduct = prodsController.getProdById(id);
  selectedProduct
    ? res.status(200).json({ data: selectedProduct })
    : res.status(404).json({ data: "Producto no encontrado" });
});

prodsRoute.post("/", checkIfAdmin, (req, res) => {
  const newProd = {
    id: uuidv4(),
    timestamp: new Date(),
    ...req.body,
  };
  prodsController.saveProd(newProd);
  res.status(201).json({ msg: "Product added" });
});

prodsRoute.put("/:id", checkIfAdmin, (req, res) => {
  const id = req.params.id;
  const data = req.body;
  prodsController.updateProdByID(id, data);
  res.status(201).json({ msg: "Product updated" });
});

prodsRoute.delete("/:id", checkIfAdmin, (req, res) => {
  const id = req.params.id;
  prodsController.deleteProd(id);
  res.status(200).json({ msg: "Product deleted" });
});

// Exports
export default prodsRoute;
