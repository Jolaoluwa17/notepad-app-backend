const express = require("express");
const router = express.Router();
const passport = require("passport");
const signupController = require("../controllers/signupController");

// create a new user
router.post("/user/signup", signupController.handleNewUser);

// // sign in with email for new user
// router.post(
//   "/user/signin",
//   passport.authenticate("user-local"),
//   authController.handleUserLogin
// );

module.exports = router;
