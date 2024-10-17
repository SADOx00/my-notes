const User = require("./models/user");

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
    console.log(email, password);
    await User.create({
      fullName: email,
      email,
      password,
    });
    return res.render("register", {
      title: "register",
    });
  } catch (error) {
    console.log(error);
  }
};
