const express = require("express");
const { signUpUser, loginUser } = require("../controllers/User.controller");
const userRouter = express.Router();
require("dotenv").config();

// sign up user route
userRouter.post("/register", signUpUser);

// Login user route
userRouter.post("/login", loginUser);

module.exports = {
  userRouter,
};
