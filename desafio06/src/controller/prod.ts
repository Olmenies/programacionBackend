// Interface
interface product {
  id: string,
  title : string,
  price: number,
  image: string
}

// Class
class Products {
  constructor(private prods: product[] = []) {}

  public getAll(): product[] {
    return this.prods;
  };

  public save(data : product){
    this.prods.push(data);
  }
}

// Instanciation
const prodsController = new (Products);

// Exports
export default prodsController;

  //Getter -> Property that execute a method when a value is retrieved
  /*
  public get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  //Setter
  public set mostRecentReport(value: string) {
    if (value) {
      this.addReport(value);
    } else {
      throw new Error("Please, pass in a valid value");
    }
  }
  */