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
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(email, password, "\n", hashedpassword);
    await User.create({
      fullName: email,
      email,
      password: hashedpassword,
    });
    return res.render("register", {
      title: "register",
    });
  } catch (error) {
    console.log(error);
  }
};
