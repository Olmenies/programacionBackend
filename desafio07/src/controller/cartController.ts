// Imports
import fs from "fs";
import path from "path";
import { cart, labeledProduct } from "../common/types";
import { v4 as uuidv4 } from "uuid";

// Constants
const cartFile = path.resolve(__dirname, "../../data/carts.json");

// Class
class Cart {
  constructor(
    public id: string = uuidv4(),
    public timestamp: string = Date().toString(),
    public prods: labeledProduct[] = []
  ) {}
}

// Controller
class CartController {
  constructor(private carts: Cart[] = []) {};

  public createNewCart() {
    this.carts.push(new Cart());
  }

  public listAllCarts() : Cart[]{
    return this.carts
  }

  public listCartProds(id: string) : labeledProduct[] | undefined{
    const selectedCart = this.carts.find(el => el.id === id )
    return selectedCart ? selectedCart.prods : undefined;
  }

  public addProdToCart(id: string, prod: labeledProduct | undefined){
    console.log(id);
    console.log(prod);
    const selectedCart = this.carts.find(el => el.id === id);
    if(selectedCart){
      if(prod){
        selectedCart.prods.push(prod);
      }
    }
    
  }
}

// Controller initialization
const cartController = new CartController();

// Exports
export default cartController;
