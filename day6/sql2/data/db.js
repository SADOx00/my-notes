const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: "mysql",
    host: config.db.host,
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("ORM  bağlantı başarışılı");
  } catch (error) {
    console.log(error);
  }
};

dbConnection();

module.exports = sequelize;
