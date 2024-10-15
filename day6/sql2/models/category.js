const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../data/db");
const { name } = require("ejs");

const Category = sequelize.define("category", {
  blogid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function sade() {
  await Category.sync({ force: true });
  console.log("category table created successfully");
  // await Category.create({
  //   name: "java developer",
  // });
  // await Category.create({
  //   name: "java2 developer",
  // });
  // await Category.create({
  //   name: "java4 developer",
  // });
  await Category.bulkCreate([
    { name: "java" },
    { name: "python" },
    { name: "c++" },
  ]);

  console.log("categor eklendi");
}
sade();
module.exports = Category;
