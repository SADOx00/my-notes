const express = require("express");
const router = express.Router();
const db = require("../data/db");

let categories = [];

// Kategorileri yükleyen bir fonksiyon
async function loadCategories() {
  try {
    const [res] = await db.execute("SELECT * FROM category"); // Veritabanı sonucunu alıyoruz
    categories = res; // Kategorileri buraya atıyoruz
  } catch (err) {
    console.error("Error loading categories:", err);
  }
}

// Kategorileri yükle ve route'ları tanımla
(async () => {
  await loadCategories(); // Kategorileri yükle
})();

// Blog detayları için route
router.get("/blogs/:blogid", async function (req, res) {
  let id = await db.execute(
    "SELECT * FROM blogtable WHERE blogid = " + req.params.blogid
  );
  console.log(id[0][0]);
  res.render("users/blog-details", { data: id[0][0] });
});

// Blog listesi için route
router.get("/blogs", async function (req, res) {
  try {
    const [blogs] = await db.execute("SELECT * FROM blogtable");
    if (categories.length === 0) {
      return res.status(500).send("Categories not loaded yet.");
    }
    res.render("users/blogs", {
      blogs: blogs,
      title: "Popular Courses",
      categories: categories.map((category) => category.name), // Sadece isimleri alıyoruz
    });
  } catch (err) {
    console.error("Error loading blogs:", err);
    res.status(500).send("Error loading blogs.");
  }
});

// Anasayfa için route
router.get("/", async function (req, res) {
  try {
    const [blogs] = await db.execute("SELECT * FROM blogtable");
    if (categories.length === 0) {
      return res.status(500).send("Categories not loaded yet.");
    }
    res.render("users/index", {
      blogs: blogs,
      title: "Popular Courses",
      categories: categories.map((category) => category.name), // Kategorilerin isimlerini al
    });
  } catch (err) {
    console.error("Error loading blogs:", err);
    res.status(500).send("Error loading blogs.");
  }
});

module.exports = router;
