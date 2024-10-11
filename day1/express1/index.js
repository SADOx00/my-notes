const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("MiddleWar");
  next();
});

app.use(function (req, res, next) {
  console.log("middlewar 3");
  next();
});

app.use(function (req, res) {
  console.log("Devam");
  res.send("<h1>and ending</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
