const User = require("./models/user");
const bcrypt = require("bcrypt");

exports.get_register = (req, res) => {
  try {
    return res.render("register", {
      message: "register",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.post_register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(email, password, "\n", hashedPassword); // Fazla parantezi kaldırdım

    await User.create({
      fullName: email, // Eğer fullName ayrı bir veri değilse, bu alanı düzenleyin
      email,
      password: hashedPassword,
    });

    return res.render("register", {
      title: "register",
    });
  } catch (error) {
    console.log(error); // Hata mesajını konsola yazdır
    return res.status(500).send("An error occurred during registration."); // Hata durumunda bir yanıt gönder
  }
};

exports.get_login = (req, res) => {
  try {
    return res.render("login", {
      message: "",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.post_login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(user);

    if (!user) {
      return res.render("login", {
        title: "register",
        message: "GİRİŞ HATALI",
      });
    } else {
      const result = await bcrypt.compare(password, user.password);

      if (result) {
        res.redirect("/admin/blogs");
        return res.render("login", {
          title: "register",
          message: "GİRİŞ Başarılı",
        });
      } else {
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
