// SECTION -   <<< Hash >>>
const note1 = async () => {
  const bcrypt = require("bcrypt");
  const password = await bcrypt.hash("password", 10); // NOTE burdakı 10 hashleme zorluğu
};
// !SECTION

// SECTION -   <<< login işlemi>>>
const note2 = async () => {
  const bcrypt = require("bcrypt");
  //FIXME -  logi işlemi burada başlıyor
  exports.post_login = async (req, res) => {
    try {
      const { email, password } = req.body; //NOTE -  ilk önce burda kullanıcıdan gelen bilgileri alıyoruz

      const user = await User.findOne({
        //NOTE - burda email e uyan bır user varmı check edıyoruz
        where: {
          email: email,
        },
      });
      console.log(user);

      if (!user) {
        //NOTE - eger yoksa mesaj gnderıyoruz
        return res.render("login", {
          title: "register",
          message: "GİRİŞ HATALI",
        });
      } else {
        //NOTE - eger varsa bu sefer sıfresyı check edıyoruz
        const result = await bcrypt.compare(password, user.password);

        if (result) {
          //NOTE - eger buda uyuryorsa kullanıcıyı yonlendırıyouz
          res.redirect("/admin/blogs");
          return res.render("login", {
            title: "register",
            message: "GİRİŞ Başarılı",
          });
        } else {
          //NOTE - yoksada hata mesajı gonderıyorız
          return res.render("login", {
            title: "register",
            message: "şifre HATALI",
          });
        }
      }
    } catch (error) {
      console.log(error); // Hata mesajını konsola yazdır
      return res.status(500).send("An error occurred during registration."); // Hata durumunda bir yanıt gönder
    }
  };
};
// !SECTION
