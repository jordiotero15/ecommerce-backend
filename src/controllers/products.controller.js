import { response } from "express";
import productsManager from "../data/managers/product.manager.fs.js";

class productsControllers {
  constructor() {}

  async getAllProducts(req, res, next) {
    try {
      let { category } = req.query;
      let response;
      if (!category) {
        response = await productsManager.readAll();
      } else {
        response = await productsManager.readAll(category);
      }
      if (response.length > 0) {
        return res
          .status(200)
          .json({ message: "Products read successfully", response });
      } else {
        const error = new Error("Products not found");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  }

  async getProduct(req, res, next) {
    try {
      const { pid } = req.params;
      const response = await productsManager.readOne(pid);

      if (response) {
        return res.status(200).json({ message: "Product found", response });
      } else {
        const error = new Error("Product not found, invalid id");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const data = req.body;

      const responseManager = await productsManager.create(data);

      return res.status(201).json({
        message: "Product created",
        response: `Product id: ${responseManager}`,
      });
    } catch (error) {
      return next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { pid } = req.params;
      const data = req.body;
      const responseManager = await productsManager.update(pid, data);

      if (!responseManager) {
        const error = new Error(`The product with id ${pid} was not found`);
        error.statusCode = 404;

        throw error;
      }
      return res.status(200).json({
        message: "Product updated successfully!",
        response: responseManager,
      });
    } catch (error) {
      return next(error);
    }
  }

  async destroyProduct(req, res, next) {
    try {
      const { pid } = req.params;
      const responseManager = await productsManager.destroy(pid);
      if (!responseManager) {
        const error = new Error(`The product with id ${pid} was not found`);
        error.statusCode = 404;
        throw error;
      }
      return res.status(200).json({
        message: "Product deleted successfully!",
        response: responseManager,
      });
    } catch (error) {
      return next(error);
    }
  }

  async showProducts(req, res, next) {
    try {
      let { category } = req.query;
      let all;
      if (!category) {
        all = await productsManager.readAll();
      } else {
        all = await productsManager.readAll(category);
      }
      if (all.length > 0) {
        return res.render("index", { data: all });
      } else {
        const error = new Error("Products not found");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  }
}

const productController = new productsControllers();

export default productController;
