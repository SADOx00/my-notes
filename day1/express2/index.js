const express = require("express");
const app = express();

app.use("/blog/:id", (req, res) => {
  res.send(`<h1>Detay:${req.params.id} </h1>`);
});

app.use("/blog", (req, res) => {
  res.send("<h1>Blog</h1>");
});

app.use("/cart", (req, res) => {
  res.send("<h1>Cart</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
