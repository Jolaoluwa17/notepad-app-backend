const express = require("express");
const router = express.Router();
const passport = require("passport");
const signupController = require("../controllers/signupController");
const authController = require("../controllers/authController");

// create a new user
router.post("/user/signup", signupController.handleNewUser);

// sign in with email for new user
router.post("/user/signin", authController.handleUserLogin);

module.exports = router;
