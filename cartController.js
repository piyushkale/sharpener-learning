const { sendErrorResponse } = require("../utils/response");
const getCartForId = (req, res) => {
  const { userId } = req.params;
  if (userId > 10) {
    return sendErrorResponse(res, {
      message: "User ID not found",
      statusCode: 404,
    });
  }
  res.send(`<h1>Fetching cart for user with ID:${userId}</h1>`);
};
const addCartForId = (req, res) => {
  const { userId } = req.params;
  if (userId > 10) {
    //Handling error in dedicated centralized error handler
    return sendErrorResponse(res, {
      message: "Product already in cart",
      statusCode: 404,
    });
  }
  res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
};

module.exports = {
  getCartForId,
  addCartForId,
};
