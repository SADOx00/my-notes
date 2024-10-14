// SECTION - sequilize ORM burda basliyor?

// SECTION - 2
const note2 = () => {
  //FIXME -  EGER FORMDA RESİM UPLUAD EDİLECEKSE KESINLIKLE _-MULTER-_ KULLAN
};

// FIXME - sequilizer ornek model oluşturma
{
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
  }
  sade();

  module.exports = Blog;
}

// SECTION - 3
const note3 = () => {
  async function sade() {
    await Category.sync({ force: true }); // TODO bu demek verıtabanını sıl yenıden kur
    console.log("category table created successfully");
    // await Category.create({
    //   name: "java developer", // NOTE -  boyle teklı ekleme yapabikirsin
    // });
    // await Category.create({
    //   name: "java2 developer",
    // });
    // await Category.create({
    //   name: "java4 developer",
    // });
    await Category.bulkCreate([
      { name: "java" },
      { name: "python" }, // NOTE - böyle çoklu ekleme yababilrisn
      { name: "c++" },
    ]);

    console.log("categor eklendi");
  }
  sade();
  module.exports = Category;
};

// SECTION - 4 bır şey eklemeyı başka bır dosyada kullanma
const note4 = () => {
  const Category = require("../models/category"); //NOTE - burdakı kategory model de export edilen category

  router.post("/blog/create", async function (req, res) {
    console.log(req.body);
    const category = req.body.rad;
    try {
      await Category.create({ name: category });
    } catch (err) {
      console.log(err);
    }
    res.render("admin/admin-create", { data: ["Yazılım", "Css", "Html"] });
  });
  //FIXME - ve boyle ekleyebilrisin istediğin yerden
};
