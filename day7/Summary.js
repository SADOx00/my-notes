// SECTION - 1
const note1 = async () => {
  var data = await Category.findAll(); // NOTE - Bu demektir ki: select * from Category
  console.log(data[0].dataValues.name);

  var data = await Category.findAll({ attributes: ["name"] }); // NOTE - attribute vererek sadece o kolonları çağırısın gereksi bilgileri getirme
  console.log(data[0].dataValues);

  var data = await Category.findAll({
    attributes: ["name"],
    where: { name: "java" }, // NOTE -  where ile koşul verebiliyorsun
  });
  console.log(data[0].dataValues);

  var data = await Category.findOne({ where: { name: "c++" } }); // NOTE -  bu donen ilk değeri alabilirsin
  console.log(data.dataValues);

  var data = await Category.findByPk(1); // NOTE - burada primary key ile bulabiliriz
  console.log(data);
};
//!SECTION

// SECTION - 2
const note2 = async () => {
  var data = await Category.findAll({
    where: { name: "python", blogid: 2 }, // NOTE  burada koşulları and operatorü ile bağlar
  });

  // FIXME -ama eğer OR operator kkullanacaksan aşağı dikkat et
  const { Op } = require("sequelize");

  var data = await Category.findAll({
    where: { [Op.or]: [{ name: "c++" }, { blogid: 2 }] }, // NOTE  ilki hangi operatör ikincisi durumlar için yani cases ler için
  });
  console.log(data);
};
// !SECTION

// SECTION - 3
const note3 = async () => {
  // FIXME - Database update işlemleri ^ÖNEMLİ^

  const java = await Category.findByPk(1); // NOTE - ilk önce değiştereceğimiz colonu seçiyoruz yanı deişkene atıyoruz
  console.log(java.name);

  java.name = "Güncel java+ plus"; //NOTE - sonra değişteceğimiz değeri buna atıyoruz

  await java.save(); // FIXME bunu diyerek değişilikleri kaydediyoruz. aynı sqlite deki db.commit() gibi

  console.log(java.name);

  // ANCHOR - Bence bu daha hızlı >>=>  Change everyone without a last name to "Doe"
  await User.update(
    { lastName: "Doe" },
    {
      where: {
        lastName: null,
      },
    }
  );

  java.set({ name: "Güncel java+ plus" }); // FIXME -  eğer çok öğe deiştereceksen set içine sözlük olarak ver
  await java.save();
};
// !SECTION

// SECTION - 4 silme işlemi
const note4 = async () => {
  const java = await Category.findByPk(1);
  java.destroy(); //FIXME -  Böyle Yaparak silebilirsin ama ilk once secmen gerekir.
  console.log("java silindi");

  await Category.destroy({
    //FIXME - Bence boyyle daha hızlı
    where: {
      name: "python",
    },
  });
  console.log("python destroyed successfully");
};

// !SECTION

// FIXME - Eğer İlişkilendirmeye ihticayıcın olursa kesinlikle sequılıze oku

// FIXME - router lardaki fonksiyonları controllers dıye bır klasor olustur ve oraya koy fonksiyonları cunku daha sade olsun
