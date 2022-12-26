////////////////////////////////////////////////////////////////////////////////////////////
// Classes
////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');

class Container {
    constructor(route = '') {
        this.route = route;
    }

    #generateRandom(length) {
        const min = 0;
        const max = length;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    async getAll() {
        const tempData = await fs.promises.readFile(this.route, 'utf-8');
        return tempData;
    }

    async getRandom() {
        const tempData = JSON.parse(await fs.promises.readFile(this.route, 'utf-8'));
        const randomNumber = this.#generateRandom(tempData.length);
        return tempData[randomNumber]
    }
}

const container = new Container('./data/data.json');

////////////////////////////////////////////////////////////////////////////////////////////
// Expres Server
////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {

    res.json({
        message: 'Hello! You\'re in root ',
        route: 'This is /',
    });
});

app.get('/products', (req, res) => {

    container.getAll()
        .then(data => {
            console.log(data);
            console.log(typeof(data));
            res.send(data)
        })
        .catch(err => console.error(err));
});

app.get('/randomProduct', (req, res) => {


    container.getRandom()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.error(err));
})

const server = app.listen(PORT, () => {
    console.log(`Server listening to port ${server.address().port}`);
});

server.on('error', error => console.error(`Error on server: ${error}`));
