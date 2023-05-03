const express = require("express");
const cors = require("cors");
const allChefs = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(allChefs);
});

app.listen(5000, () => {
  console.log("server is running");
});
