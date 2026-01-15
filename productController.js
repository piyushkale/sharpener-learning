const getProducts = (req, res) => {
  res.send("<h1>Fetching all products</h1>");
};

const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
};

const addProduct = (req, res) => {
  res.send("<h1>Adding a new product</h1>");
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
