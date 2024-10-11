const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/admin/blog/create", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "admin-create.html"));
});

router.use("/admin/blogs", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "admin-page.html"));
});

router.use("/admin/blogs/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "admin-edit.html"));
});

module.exports = router;
