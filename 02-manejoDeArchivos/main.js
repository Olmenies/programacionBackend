/*
    Implementar un programa que contenga una clase llamanda Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:
    1. * save(Object) : Number -> Recibe un objeto, lo guarda en el archivo y devuelve el id asignad
    2. * getById(Int) : Object -> Recibe un id y devuelve el objeto con ese id o null si no existe
    3.  * getAll() : Object[] -> Devuelev un array con todos los objetos del archivo
    5. deleteById(Int) : void -> Elimina del archivo el objeto con el id buscado
    6.  * deleteAll() : void -> Elimina todos los objetos presentes en el archivo
*/

const fs = require('fs');

class Container {
    constructor(route = '') {
        this.route = route;
    }

    #calculateMaxId(convertedData) {

        let maxId = 0;

        convertedData.forEach((element) => {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });

        return (parseInt(maxId) + 1);
    }

    #findId(id, convertedData) {
        return convertedData.find((element) => element.id === id);
    }

    async save(element) {
        try {
            const convertedData = JSON.parse(await fs.promises.readFile(this.route, 'utf-8'));
            const newData = convertedData.concat({ ...element, id: this.#calculateMaxId(convertedData) });
            await fs.promises.writeFile(this.route, JSON.stringify(newData));
        }
        catch (err) {
            throw err;
        }
    }

    async getById(id) {
        try {
            const convertedData = JSON.parse(await fs.promises.readFile(this.route, 'utf-8'));
            return this.#findId(id, convertedData);
        } catch (err) {
            throw err;
        }
    }

    async getAll() {
        try {
            return (JSON.parse(await fs.promises.readFile(this.route, 'utf-8')));
        } catch (err) {
            throw err;
        }
    }

    async deleteById(id) {
        try {
            const convertedData = JSON.parse(await fs.promises.readFile(this.route, 'utf-8'));
            const newArray = convertedData.filter((element) => element.id !== id);
            console.log(newArray);
            await fs.promises.writeFile(this.route, JSON.stringify(newArray));
        } catch (err) {
            throw err;
        }
    }

    async deleteAll() {
        try {
            await fs.promises.unlink(this.route);
        } catch (err) {
            throw err;
        }
    }
}

const container = new Container('./data.json');
container.save({ song: 'Black', artist: 'Pearl Jam' });
container.getAll().then((data) => console.log(data));
container.getById(0).then((data) => console.log(data));
container.deleteById(0);
//container.deleteAll();