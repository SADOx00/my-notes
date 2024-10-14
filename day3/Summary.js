// SECTION 1
const note1 = async () => {
  app.use(express.urlencoded({ extended: false })); // NOTE bu index.js te en ustte tanimlanir anlami buraya formdan ogeler gelecekk

  await db.execute("INSERT INTO category (name) VALUES (?)", [category]); // NOTE eger degiskenleri en son vererceksen virgul , ve listeye yaz ornek ,[]

  var [data, _] = await db.execute("SELECT * FROM category");
  console.log(data); // NOTE -  aslinda data 1. index te gelir.

  // FIXME -  Html or ejs ten gelen forma node tan  req.body diye erisirsin
};
