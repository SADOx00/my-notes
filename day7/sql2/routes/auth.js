const express = require("express");
const router = express.Router();

const authController = require("../contoller");

router.get("/register", authController.get_register);
router.post("/register", authController.post_register);

module.exports = router;
