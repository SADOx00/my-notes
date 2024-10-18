const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../data/db");

const Blog = sequelize.define("blog", {
  blogid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function sade() {
  await Blog.sync({ force: true });
  console.log("blog table created successfully");

  await Blog.create({
    title: "DENEMe",
    content: "içerik",
    src: "http",
  });
}
sade();

module.exports = Blog;
