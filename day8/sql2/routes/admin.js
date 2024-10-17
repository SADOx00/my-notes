const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../data/db");
const multer = require("multer");
const upload = multer({ dest: "./public/images" });
const Blog = require("../models/blog");
const Category = require("../models/category");
const User = require("../models/user");
const { Op } = require("sequelize");

router.get("/blog/create", function (req, res) {
  res.render("admin/admin-create", { data: ["Yazılım", "Css", "Html"] });
});
router.post("/blog/create", async function (req, res) {
  console.log(req.body);
  const category = req.body.rad;
  try {
    await Category.create({ name: category });

    await Category.destroy({
      where: {
        name: "python",
      },
    });
    console.log("python destroyed successfully");
  } catch (err) {
    console.log(err);
  }
  res.render("admin/admin-create", { data: ["Yazılım", "Css", "Html"] });
});

router.get("/blogs", async function (req, res) {
  try {
    // var [data, _] = await db.execute("SELECT * FROM category");
    var data = await Category.findAll({
      where: { [Op.or]: [{ name: "c++" }, { blogid: 2 }] },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  res.render("admin/admin-page", { data: data });
});

router.post("/blogs", upload.single("sades"), async function (req, res) {
  try {
    var [data, _] = await db.execute("SELECT * FROM category");
    console.log(data);
    console.log(req.file.originalname);
  } catch (error) {
    console.log(error);
  }
  res.render("admin/admin-page", { data: data });
});

router.get("/blogs/:id", function (req, res) {
  res.render("admin/admin-edit");
});

module.exports = router;
