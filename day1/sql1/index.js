const express = require("express");
const config = require("./config");
const app = express();

const mySql = require("mysql2");
const con = mySql.createConnection(config.db);

con.connect((err) => {
  if (err) {
    console.log(err);
    return 0;
  } else {
    con.query("SELECT * FROM blogtable", (err, res) => {
      console.log(res);
    });
    console.log("Connection successful");
  }
});
app.set("view engine", "ejs");
const path = require("path");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(userRoute);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
