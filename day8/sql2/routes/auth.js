const express = require("express");
const router = express.Router();

const authController = require("../contoller");

router.get("/register", authController.get_register);
router.post("/register", authController.post_register);

router.get("/login", authController.get_login);
router.post("/login", authController.post_login);

module.exports = router;
