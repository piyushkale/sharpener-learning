const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Here is the list of books!</h1>");
});
router.post("/", (req, res) => {
  const { book } = req.body;
  const { author } = req.body;

  res.send(`<h1>Book has been added - ${book} ${author}</h1>`);
});

module.exports = router;
