const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

//extracting student names from the json data
const names = courses.map(({ name }) => name);

router.get("/", (req, res) => {
  res.send(`<h1>Courses: ${names}</h1>`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((u) => u.id == id);
  if (!course) {
    res.status(404).send("<h1>course not found</h1>");
  }
  res.send(`<h1>course Name ${course.name} - id ${id}</h1>`);
});

module.exports = router;
