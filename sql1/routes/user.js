const express = require("express");
const router = express.Router();
const path = require("path");

const data = {
  title: "Popular Courses",
  categories: ["Web", "Api", "Json", "Document"],
  blogs: [
    {
      blogId: 1,
      title: "Komple Uygulamalı Web Geliştirme",
      content:
        "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
      src: "1.jpeg",
    },
    {
      blogId: 2,
      title: "Komple Uygulamalı Web Geliştirme",
      content:
        "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
      src: "2.jpeg",
    },
    {
      blogId: 3,
      title: "Komple Uygulamalı Web Geliştirme",
      content:
        "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
      src: "3.jpeg",
    },
  ],
};

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs");
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});

module.exports = router;
