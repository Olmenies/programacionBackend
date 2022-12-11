"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class
class Products {
    constructor(prods = []) {
        this.prods = prods;
    }
    getAll() {
        return this.prods;
    }
    ;
    save(data) {
        this.prods.push(data);
    }
}
// Instanciation
const prodsController = new (Products);
// Exports
exports.default = prodsController;
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
