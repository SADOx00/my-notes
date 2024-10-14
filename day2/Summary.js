// SECTION 1
const note1 = () => {
  const db = require("../data/db"); //NOTE -  Bu con.Promise donen varya
  let categories = [];

  // Kategorileri yükleyen bir fonksiyon
  async function loadCategories() {
    try {
      const [res] = await db.execute("SELECT * FROM category"); // Veritabanı sonucunu alıyoruz // NOTE - Ornek veritabani bilgi cekmek
      categories = res; // Kategorileri buraya atıyoruz
    } catch (err) {
      console.error("Error loading categories:", err);
    }
  }
  // categories: categories.map((category) => category.name), // NOTE - Boyle gezinebiliriz
  if (categories.length === 0) {
    return res.status(500).send("Categories not loaded yet."); // FIXME - Boylece Hata gondereliriz  yani? ya render ya da boyle gonder
  }
};
