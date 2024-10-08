import { Router } from "express";
import productController from "../../controllers/products.controller.js";
import isValidDataProduct from "../../middlewares/isValidDataProduct.mid.js";

const productsRouter = Router();

productsRouter.get("/", productController.getAllProducts);
productsRouter.get("/:pid", productController.getProduct);
productsRouter.post("/", isValidDataProduct, productController.createProduct);
productsRouter.put("/:pid", productController.updateProduct);
productsRouter.delete("/:pid", productController.destroyProduct);

export default productsRouter;
