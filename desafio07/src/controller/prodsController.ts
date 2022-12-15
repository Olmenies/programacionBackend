// Imports
import path from "path";
import fs from "fs";
import { product, labeledProduct } from "../common/types";

// Constants
const prodsFile = path.resolve(__dirname, "../../data/products.json");

// Controller
class ProductsController {
  constructor(private prods: labeledProduct[] = []) {}

  async #writeToFs(data: labeledProduct[]) {
    try {
      await fs.promises.writeFile(prodsFile, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  // Async function used to bring the values saved on fs when Products is initialized
  async initialize() {
    try {
      const data: labeledProduct[] = JSON.parse(
        await fs.promises.readFile(prodsFile, "utf-8")
      );
      this.prods = [...data];
    } catch (error) {
      console.log(error);
    }
  }

  public getAllProds(): labeledProduct[] {
    return this.prods;
  }

  public getProdById(id: string): labeledProduct | undefined {
    const selectedProduct = this.prods.find((el) => el.id === id);
    return selectedProduct;
  }

  public updateProdByID(id: string, data: product) {
    //this.prods.map(el => el.id).indexOf(id);
    const index = this.prods.map((el) => el.id).indexOf(id);
    const selectedProduct = this.prods.find((el) => el.id === id);
    if(selectedProduct){
      const updatedProduct = {...selectedProduct, ...data};
      this.prods[index] = updatedProduct;
      this.#writeToFs(this.prods);
    }
  }

  public saveProd(data: labeledProduct) {
    this.prods.push(data);
    this.#writeToFs(this.prods);
  }

  public deleteProd(id: string){
    const index = this.prods.map((el) => el.id).indexOf(id);
    //const selectedProduct = this.prods.find((el) => el.id === id);
    this.prods.splice(index - 1, 1);
  }
}

// Controller initialization
const prodsController = new ProductsController();
prodsController.initialize();

// Exports
export default prodsController;
