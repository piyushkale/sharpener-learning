const getUser = (req, res) => {
  res.send("<h1>Fetching all users</h1>");
};

const getUserById = (req, res) => {
  const { id } = req.params;
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
