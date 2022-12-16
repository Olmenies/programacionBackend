// Imports
// To do: Add return codes
import fs from "fs";
import path from "path";
import { labeledProduct } from "../common/types";
import { v4 as uuidv4 } from "uuid";

// Constants
const cartsFile = path.resolve(__dirname, "../../data/carts.json");

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
  constructor(private carts: Cart[] = []) {}

  async #writeToFs(data: Cart[]) {
    try {
      await fs.promises.writeFile(cartsFile, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  // Async function used to bring the values saved on fs when Products is initialized
  async initialize() {
    try {
      const data: Cart[] = JSON.parse(
        await fs.promises.readFile(cartsFile, "utf-8")
      );
      this.carts = [...data];
    } catch (error) {
      console.log(error);
    }
  }

  public createNewCart() {
    this.carts.push(new Cart());
    this.#writeToFs(this.carts);
  }

  public listAllCarts(): Cart[] {
    return this.carts;
  }

  public listCartProds(id: string): labeledProduct[] | undefined {
    const selectedCart = this.carts.find((el) => el.id === id);
    return selectedCart ? selectedCart.prods : undefined;
  }

  public addProdToCart(id: string, prod: labeledProduct) {
    console.log(id);
    console.log(prod);
    const selectedCart = this.carts.find((el) => el.id === id);
    if (selectedCart) {
      if (prod) {
        selectedCart.prods.push(prod);
      }
      this.#writeToFs(this.carts);
    }
  }

  public deleteCartbyId(id: string) {
    const index = this.carts.map((el) => el.id).indexOf(id);
    //const selectedProduct = this.prods.find((el) => el.id === id);
    this.carts.splice(index - 1, 1);
    this.#writeToFs(this.carts);
  }

  public deleteCartProdByID(cartId: string, prodId: string) {
    const selectedCart = this.carts.find((el) => el.id === cartId);
    if (selectedCart) {
      const index = selectedCart.prods.map((el) => el.id).indexOf(prodId);
      if (index) {
        selectedCart.prods.splice(index - 1, 1);
        this.#writeToFs(this.carts);
      }
    }
  }
}

// Controller initialization
const cartController = new CartController();
cartController.initialize();


// Exports
export default cartController;
