const express = require("express");
const allChefs = require("./data.json");

const app = express();

app.get("/", (req, res) => {
  res.json(allChefs);
});

app.listen(5000, () => {
  console.log("server is running");
});
