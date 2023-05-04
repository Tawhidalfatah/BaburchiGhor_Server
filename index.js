const express = require("express");
const cors = require("cors");
const allChefs = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(allChefs);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const chef = allChefs?.find((chef) => chef.id == id);
  res.send(chef);
});

app.listen(5000, () => {
  console.log("server is running");
});
