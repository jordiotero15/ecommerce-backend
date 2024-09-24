//import productsManager from "../data/products.manager.js"

async function getAllProducts(req, res) {}
async function getProduct(req, res) {}
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
