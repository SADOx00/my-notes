const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");
const User = sequelize.define("User", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function sade() {
  await User.sync({ force: true });
  console.log("USer table created successfully");
}
sade();

module.exports = User;
