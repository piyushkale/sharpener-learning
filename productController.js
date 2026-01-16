const productService =require('../service/productService')

const getProducts = (req, res) => {
  const msg = productService.getProduct()
  res.send(msg)
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const msg = productService.getProductById(id)
  res.send(msg)
};

const addProduct = (req, res) => {
  const msg = productService.addProduct()
  res.send(msg)
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
