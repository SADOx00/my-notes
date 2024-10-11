const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("node_modules"));
app.use("/blog/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "blog-detail.html"));
});

app.use("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "blog.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "index.html"));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
