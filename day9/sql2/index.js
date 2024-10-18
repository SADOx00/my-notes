const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sequelize = require("./data/db");
var SequelizeStore = require("connect-session-sequelize")(session.Store);

const store = new SequelizeStore({
  db: sequelize,
});

store.sync();

app.use(
  session({
    secret: "sado",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    store: store,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const path = require("path");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const authRoute = require("./routes/auth");
const { db } = require("./config");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.is_Auth = req.session.is_Auth;
  next();
});

app.use("/admin", adminRoute);
app.use(userRoute);
app.use("/account", authRoute);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
