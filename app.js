const express = require("express");
const app = express();
const bookRouter = require("./routes/books");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> HomePage </h1>");
});

app.use("/books", bookRouter);

app.listen(3000);
