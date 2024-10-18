// SECTION -   <<< LOGİN İŞLEMİ( COOKİE İLE )>>>
const note1 = async () => {
  //FIXME - asagidaki leri index e ekle

  const cookieParser = require("cookie-parser");

  app.use(cookieParser());
  //FIXME  buraya kadr index

  if (result) {
    res.cookie("isAuth", 1); //NOTE -  bu demek cookíe ye isAuth = 1 ekle demek

    res.redirect("/admin/blogs");
    return res.render("login", {
      title: "register",
      message: "GİRİŞ Başarılı",
    });
  }

  res.render("admin/admin-page", {
    data: data,
    izin: "onay",
    is_Auth: req.cookies.isAuth, //NOTE -  cookie yi data olarak ejs e gonderme
  });

  router.get("/logout", async function (req, res) {
    res.clearCookie("isAuth"); //FIXME -  boyle yaparak cookie yi silebilirsin
    res.redirect("/admin/blogs");
  });
};

// !SECTION

// SECTION -   <<< LOGİN İŞLEMİ( SESSION ID İLE )>>>
const note2 = async () => {
  //FIXME - asagidaki leri index e ekle

  const session = require("express-session");

  app.use(
    session({
      secret: "sado",
      resave: false,
      saveUninitialized: false, //NOTE -  her giren için s id oluitursunmu ?
      cookie: {
        maxAge: 1000 * 60 * 60, //NOTE - session kullanım suresı
      },
    })
  );
  //FIXME  buraya kadr index

  if (result) {
    req.session.is_Auth = 1; // NOTE - boyle yaparak sesıon ekleyebılırsın

    res.redirect("/admin/blogs");
    return res.render("login", {
      title: "register",
      message: "GİRİŞ Başarılı",
    });
  }

  res.render("admin/admin-page", {
    data: data,
    izin: "onay",
    is_Auth: req.session.is_Auth, // NOTE -  bu şekilde sessions ıd yı clıenta gonderebılırsın
  });

  router.get("/logout", async function (req, res) {
    await req.session.destroy(); //FIXME -  bu şekilde sessıon ı silebelirsin
    // FIXME isAuth parametresini oturumdan kaldır aşaıaki eğer istersen sadece bır parametre kaldırmaysını
    // delete req.session.isAuth;
    res.redirect("/admin/blogs");
  });
};

// !SECTION

// SECTION -   <<< SESSION ID DATABASE DE ÇALIŞİTIRMA>>>
const note3 = async () => {
  const sequelize = require("./data/db"); //FIXME -  bu seqeilzze donenn dosya
  var SequelizeStore = require("connect-session-sequelize")(session.Store); //NOTE -  bu repoyu ındır

  const store = new SequelizeStore({
    db: sequelize,
  });

  store.sync(); //NOTE -  bu db oluşturur

  app.use(
    session({
      secret: "sado",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60,
      },
      store: store, //FIXME -  bunu kesın belırt
    })
  );
};
// !SECTION

// SECTION -
//FIXME -  res local ile her yerden erişilebirlir (SUNUCU TARAFINDA)
//FIXME - gerek oldugunda bunu kullan okay?

//FIXME - örnek AŞAĞIDA

//NOTE - middleware
app.use((req, res, next) => {
  res.locals.is_Auth = req.session.is_Auth; //REVIEW -  bu heryerden/ her ejs ten erişilebirlir
  next();
});

// !SECTION
