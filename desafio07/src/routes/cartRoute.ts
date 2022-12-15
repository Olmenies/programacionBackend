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
  res.json({ msg: carts });
});

cartRoute.post("/", (req, res) => {
  cartController.createNewCart();
  res.json({ msg: "You made a POST to /api/cart" });
});

cartRoute.get("/:id/products", (req, res) => {
  const id = req.params.id;
  const prods = cartController.listCartProds(id);
  res.json({ msg: prods });
});

cartRoute.post("/:id/:product", (req, res) => {
  const id = req.params.id;
  const prod = req.params.product;
  const selectedProd = prodsController.getProdById(prod);
  cartController.addProdToCart(id, selectedProd);

  res.json({ msg: "You made a POST to /:id/:product" });
});

cartRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  cartController.deleteCartbyId(id);
  res.json({msg:'You made a DELETE to /:id'});
});

// Exports
export default cartRoute;

// Prod - 4e6569b1-18ce-4ab9-8b18-a2a8410515aa
