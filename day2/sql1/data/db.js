const mySql = require("mysql2");
const config = require("../config");
const con = mySql.createConnection(config.db);

con.connect((err) => {
  if (err) {
    console.log(err);
    return 0;
  } else {
    console.log("Connection successful");
  }
});
module.exports = con.promise();
