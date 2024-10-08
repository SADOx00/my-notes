const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blog/create", function (req, res) {
  res.render("admin/admin-create");
});

router.use("/blogs", function (req, res) {
  res.render("admin/admin-page");
});

router.use("/blogs/:id", function (req, res) {
  res.render("admin/admin-edit");
});

module.exports = router;
