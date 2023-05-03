const express = require("express");
var cors = require("cors");
const app = express();
const port = 3450;
app.use(cors());
const chef = require("./chef.json");
const food = require("./chefData.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  console.log(chef);
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefs = chef.chefs.find((single) => parseInt(single.id) === id) || {};
  res.send(chefs);
});

app.get("/food", (req, res) => {
  res.send(food);
});

let vall;

app.get("/food/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef =
    food.data.find((single) => parseInt(single.id) == id) || {};
  vall = singleChef;
  res.send(singleChef);
});

app.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const details = vall.foods.find((single) => parseInt(single.id) === id);
  res.send(details);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
