const getProduct = () => {
  return("<h1>Fetching all products</h1>");
};

const getProductById = (id) => {
  return(`<h1>Fetching product with ID: ${id}</h1>`);
};

const addProduct = () => {
  return("<h1>Adding a new product</h1>");
};

module.exports = {
  getProduct,
  getProductById,
  addProduct,
};
