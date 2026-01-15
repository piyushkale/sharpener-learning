const express = require("express");
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

//extracting student names from the json data
const names = students.map(({ name }) => name);

router.get("/", (req, res) => {
  res.send(`<h1>Students: ${names}</h1>`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const student = students.find((u) => u.id == id);
  if (!student) {
    res.status(404).send("<h1>Student not found</h1>");
  }
  res.send(`<h1>Student Name ${student.name} - id ${id}</h1>`);
});

module.exports = router;
