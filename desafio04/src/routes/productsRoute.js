// Imports
const { Router } = require('express');
const fs = require('fs');
const { parse } = require('path');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/products.json');

// Route definition
const productsRoute = Router();

// Util functions
const isBodyValid = (body) => {
    if ((body.title && body.price) && (!isNaN(body.price))) {
        return true;
    } else {
        return false;
    }
}

const saveData = async (products) => {
    await fs.promises.writeFile(filePath, JSON.stringify(products));
}

const getProducts = async () => {
    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData);
    return (products)
}

const indexProducts = (products) => {
    const indexedProdcuts = products.map((el, i) => {
        return ({ ...el, id: i + 1 });
    });

    return (indexedProdcuts);
}

// Endpoints
productsRoute.get('/', async (req, res) => {
    const products = await getProducts();
    res.json({ data: products });
});

productsRoute.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const products = await getProducts();

    const indexedProdcuts = indexProducts(products);
    const selectedProduct = indexedProdcuts.find(el => el.id === id);

    selectedProduct ? res.status(200).json({ data: selectedProduct }) : res.status(404).json({ data: 'El usuario no existe' });
});

productsRoute.post('/', async (req, res) => {
    const products = await getProducts();
    const introducedObject = req.body;

    if (isBodyValid(introducedObject)) {
        products.push(introducedObject);
        await saveData(products);
        res.status(200).json({ data: products });
    } else {
        res.status(400).json({ data: 'Bad input' });
    }
});

productsRoute.put('/:id', async (req, res) => {
    const products = await getProducts();
    const id = parseInt(req.params.id);
    const introducedObject = req.body;

    //Add a verification in case the id does not exist on array
    if (isBodyValid(introducedObject)) {
        products[id - 1] = introducedObject;
        await saveData(products);
        res.status(200).json({ data: products });
    } else {
        res.status(400).json({ data: 'Bad input' });
    }
});

productsRoute.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await getProducts();
    const selectedProduct = products[id - 1];

    products.splice(id - 1, 1);
    await saveData(products);

    res.json({ data: `Deleted product ${JSON.stringify(selectedProduct)}` });
});

// Exports
module.exports = productsRoute;