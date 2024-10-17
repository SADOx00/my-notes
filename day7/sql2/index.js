const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const path = require("path");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const authRoute = require("./routes/auth");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(userRoute);
app.use("/account", authRoute);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
