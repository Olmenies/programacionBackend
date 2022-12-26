// Imports
import { Router } from "express";
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
  const { id, product } = req.params;
  const selectedProd = prodsController.getProdById(product);

  if (selectedProd) {
    cartController.addProdToCart(id, selectedProd);
    res.status(200).json({ data: "Product added" });
  } else {
    res.status(404).json({ data: "Product not found" });
  }
});

cartRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  cartController.deleteCartbyId(id);
  res.status(200).json({ msg: "You made a DELETE to /:id" });
});

cartRoute.delete("/:id/products/:product", (req, res) => {
  const { id, product } = req.params;
  cartController.deleteCartProdByID(id, product);
  res.status(200).json({ msg: "You made a DELETE to /:id/products/:product" });
});

// Exports
export default cartRoute;
