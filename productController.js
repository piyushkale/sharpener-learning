const productService = require("../service/productService");
const { sendErrorResponse } = require("../utils/response");
const getProducts = (req, res) => {
  const msg = productService.getProduct();
  res.send(msg);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  if (id > 10) {
    //Handling error in dedicated centralized error handler
    return sendErrorResponse(res, {
      message: "Product not available for this id",
      statusCode: 404,
    });
  }
  const msg = productService.getProductById(id);
  res.send(msg);
};

const addProduct = (req, res) => {
  const msg = productService.addProduct();
  res.send(msg);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
