// Imports
const { v4: uuidv4 } = require('uuid');

// Class
class Products {
    constructor() {
        this.prods = [
            { id: uuidv4(), title: 'El hombre que calculaba', price: 1200 }
        ];
    };

    getAll() {
        return this.prods;
    };

    save(data) {
        const newProd = {
            id: uuidv4(),
            title: data.title,
            price: data.price,
        };

        this.prods.push(newProd);
    }
}

// Instanciation
const prodsController = new (Products);

// Exports
module.exports = prodsController;