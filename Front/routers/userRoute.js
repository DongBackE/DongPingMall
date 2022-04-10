const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(userController.register);

router.route("/kakao/login").get();
module.exports = router;
