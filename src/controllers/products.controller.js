//import productsManager from "../data/products.manager.js"

async function getAllProducts(req, res, next) {
  try {
    let { category } = req.query;
    let response;
    if (!category) {
      response = await productsManager.readAll();
    } else {
      response = await productsManager.readAll(category);
    }
    if (response.length > 0) {
      return res.status(200).json({ message: "Products read", response });
    } else {
      const error = new Error("Products not founds");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}
async function getProduct(req, res) {
  try {
    const {pid} = req.params;
  } catch (error) {
    
  }
}
async function createGet(req, res) {}
async function createProduct(req, res) {}
async function updateProduct(req, res) {
  try {
  } catch (error) {
    const { statusCode, message } = error;
    console.log(error);
  }
}
async function destroyProduct(req, res) {
  try {
  } catch (error) {
    const { statusCode, message } = error;
    console.log(error);
  }
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  destroyProduct,
};
