// Imports
import fs from "fs";
import path from "path";
import { cart, labeledProduct } from "../common/types";


// Constants
const cartFile = path.resolve(__dirname, '../../data/carts.json');

// Class
class Cart {
  constructor(private prods: labeledProduct[]) {}
}

// Class initializations

// Exports
export default Cart;