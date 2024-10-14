const express = require("express");
const app = express(); //NOTE - İlk Express App Oluşturma

//SECTION - 1
const note1 = () => {
  app.use((req, res, next) => {
    console.log("MiddleWar"); // NOTE - MiddleWar Oluşturma
    next();
  });

  app.use(function (req, res, next) {
    console.log("middlewar 2"); //NOTE -  Birden Fazla Middlewar Oluşturablirsin.
    next();
  });

  app.use("/admin", function (req, res) {
    console.log("Devam");
    res.send("<h1>and ending</h1>"); //NOTE - bu sadece /admin de calisacak
  });

  app.use(function (req, res) {
    console.log("Devam");
    res.send("<h1>and ending</h1>"); //NOTE -  bu tum alt basliklarda gozukecek
  });

  app.listen(3000, () => {
    console.log("listening on port 3000"); //NOTE - yukaridaki butun middlewar ve alt basliklari calistiracak
  });
};

//SECTION - 2
const note2 = () => {
  app.use("/blog/:id", (req, res) => {
    res.send(`<h1>Detay:${req.params.id} </h1>`); //NOTE - :id bu eşşitir params . buna req.params.id diye erişebilirsin istediğin ismi koyabirsin
  });

  //FIXME -  Önemli: alt basliklari sıralaman onemlı eger en yukarı hepsını kapsayacak bır alt baslık koyarsan alttakı alt baslıklar gozukmeyecektır.

  app.use(express.static("node_modules")); //NOTE - bu yazılan klasorun html ve css sayfalrında kullanılmasını sağlar

  app.use("/blog/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "views/users", "blog-detail.html"));
    //NOTE -  sendfile demek bu alt baslikta bu html sayfasini goster
    // NOTE - path kullanimi nda icindekili duzgun bir src yapisina donusturuyor
    //NOTE - __dirname ve __filename adindanda anlasilir.
  });
};

//SECTION - 3
const note3 = () => {
  app.use("/libs", express.static(path.join(__dirname, "node_modules")));
  app.use("/static", express.static(path.join(__dirname, "public"))); //NOTE -  bu demek  1. stringe digerini statik olarak ata yani diger yerler den buna bu isimle eris

  // SECTION - router klasorunde bir route

  const express = require("express");
  const router = express.Router();
  const path = require("path");

  router.use("/blogs/:blogid", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users", "blog-details.html"));
  });
  module.exports = router;

  // SECTION index.js
  const userRoute = require("./routes/user");
  app.use("/api", userRoute); // FIXME bu demek api alt baslik ta bu routeri kullan
};

//SECTION - 4
const note4 = () => {
  app.set("view engine", "ejs"); // bu nu index.js te yazarsin yano ben bu sayfada ejs kullanacagim dersin

  //FIXME - allta dikkat et tamam!

  router.use("/", function (req, res) {
    res.render("users/index", data);
  }); // NOTE - eger html ise doysa sendfile yok eger .ejs ise res.render kullan
  //NOTE -  birde data gonderirsin ve bunu .ejs te kullanirsin ejsout ile
};

// SECTION - 5
const note5 = () => {
  // SECTION - confıg.js
  let configDb = {
    //     const config = {
    //     db: {
    //       host: "localhost",
    //       user: "root",
    //       password: "sade1234",
    //       database: "blogapp",
    //     },
    //   };
    //   module.exports = config;
  };

  // SECTION - ındex.js
  const config = require("./config"); //  NOTE boyle import et
  const mySql = require("mysql2"); // NOTE eger sen komut yazacaksan bu modulu kullan
  const con = mySql.createConnection(config.db);

  con.connect((err) => {
    if (err) {
      console.log(err);
      return 0;
    } else {
      con.query("SELECT * FROM blogtable", (err, res) => {
        //  NOTE query ve execute kullanilabilir err ve res dondernr
        console.log(res);
      });
      console.log("Connection successful");
    }
  });

  module.exports = con.Promise(); // Böyle yaparak heryerden bunu ımport edıp kullanabılırsın
};
