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
