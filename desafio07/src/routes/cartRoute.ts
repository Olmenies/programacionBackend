// Imports
import { Router } from "express";
import path from "path";
import cartController from "../controller/cartController";
import prodsController from "../controller/prodsController";

// Constants

// Route definition
const cartRoute = Router();

// Endpoints
cartRoute.get("/", (req, res) => {
  const carts = cartController.listAllCarts();
  res.json({ ...carts });
});

cartRoute.post("/", (req, res) => {
  cartController.createNewCart();
  res.status(201).json({ msg: "Cart created" });
});

cartRoute.get("/:id/products", (req, res) => {
  const id = req.params.id;
  const prods = cartController.listCartProds(id);
  prods
    ? res.status(200).json({ data: prods })
    : res.status(404).json({ data: "Cart not found" });
});

cartRoute.post("/:id/products/:product", (req, res) => {
  const id = req.params.id;
  const prod = req.params.product;
  const selectedProd = prodsController.getProdById(prod);
  cartController.addProdToCart(id, selectedProd);

  prod
    ? res.status(200).json({ data: 'Product added' })
    : res.status(404).json({ data: "Product not found" });
});

cartRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  cartController.deleteCartbyId(id);
  res.json({msg:'You made a DELETE to /:id'});
});

// Exports
export default cartRoute;

// Prod - 4e6569b1-18ce-4ab9-8b18-a2a8410515aa
