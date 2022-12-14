// Imports
import { Router } from "express";
import prodsController from "../controller/prodsController";
import { v4 as uuidv4 } from "uuid";

// Constants
const isAdmin = true;

// Route definition
const prodsRoute = Router();

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

prodsRoute.post("/", (req, res) => {
  if (isAdmin) {
    const newProd = {
      id: uuidv4(),
      timestamp: new Date(),
      ...req.body,
    };
    prodsController.saveProd(newProd);
    res.status(200).json({ msg: "Product added" });
  } else {
    res
      .status(401)
      .json({ msg: "User is not authorized to perform this acction" });
  }
});

prodsRoute.put("/:id", (req, res) => {
  if (isAdmin) {
    const id = req.params.id;
    const data = req.body;
    prodsController.updateProdByID(id, data);
    res.status(200).json({ msg: "Product updated" });
  } else {
    res
      .status(401)
      .json({ msg: "User is not authorized to perform this acction" });
  }
});

prodsRoute.delete("/:id", (req, res) => {
  if (isAdmin) {
    const id = req.params.id;
    prodsController.deleteProd(id);
    res.status(200).json({ msg: "Product deleted" });
  } else {
    res
      .status(401)
      .json({ msg: "User is not authorized to perform this acction" });
  }
});

// Exports
export default prodsRoute;
