import fs from "fs";
import crypto from "crypto";

class ProductsManager {

    constructor() {
        this.path = "./src/data/files/products.json";
        this.exists();
    }

    exists() {
        const fileExists = fs.existsSync(this.path);
        if (fileExists) {
            console.log("File already exists");
        } else {
            fs.writeFileSync(this.path, JSON.stringify([]));
            console.log("File Created");
        }
    }

    async readAll(category) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);

            if (category) {
                const filteredData = parseData.filter((each) => each.category === category);
                return filteredData;
            } else {
                return parseData;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async readOne(id) {
        try {
            const all = await this.readAll();
            const one = all.find((each) => each.id === id);

            return one;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async create(data) {
        try {
            data.id = crypto.randomBytes(12).toString("hex");
            const all = await this.readAll();
            all.push(data);
            const stringAll = JSON.stringify(all, null, 2);
            await fs.promises.writeFile(this.path, stringAll);
            return data.id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const all = await this.readAll();
            const index = all.findIndex((product) => product.id === id);

            if (index === -1) {
                return null;
            }

            all[index] = { ...all[index], ...data };

            const stringAll = JSON.stringify(all, null, 2);

            await fs.promises.writeFile(this.path, stringAll);

            return all[index];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const all = await this.readAll();
            const filteredProducts = all.filter((product) => product.id !== id);

            if (all.length === filteredProducts.length) {
                return null
            }

            const stringAll = JSON.stringify(filteredProducts, null, 2);

            await fs.promises.writeFile(this.path, stringAll);

            return `Product with id ${id} deleted`;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const productsManager = new ProductsManager();
export default productsManager;