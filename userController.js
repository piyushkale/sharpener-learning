const { sendErrorResponse } = require("../utils/response");
const getUser = (req, res) => {
  res.send("<h1>Fetching all users</h1>");
};

const getUserById = (req, res) => {
  const { id } = req.params;
  if (id > 10) {
    //Handling error in dedicated centralized error handler
    return sendErrorResponse(res, {
      message: "User not found",
      statusCode: 404,
    });
  }
  res.send(`<h1>Fetching user with ID: ${id}</h1>`);
};

const addUser = (req, res) => {
  res.send("<h1>Adding a new user</h1>");
};

module.exports = {
  getUser,
  getUserById,
  addUser,
};
