require("dotenv").config();
const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/Users.model");
const signUpUser = async (req, res) => {
  const { name, username, email, phone, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }
    let user = await UserModel.find({ email });
    if (user.length > 0) {
      return res.status(400).json({
        message: "User Already Exists with this email id",
      });
    }

    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        return res.status(400).json({
          error: err,
          message: "Something went wrong",
        });
      } else {
        const user = new UserModel({
          name,
          username,
          email,
          phone,
          password: secure_password,
        });
        await user.save();
        res
          .status(201)
          .json({ message: "User Added Successfully", user: user });
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.find({ email });

//     const hased_pass = user[0]?.password;
//     if (user.length > 0) {
//       bcrypt.compare(password, hased_pass, (err, result) => {
//         console.log("err", err);
//         if (result) {
//           const token = jwt.sign({ userID: user[0]?._id }, process.env.key);
//           res.send({ message: "Login Successful", token: token });
//         } else {
//           return res.status(400).json({
//             error: err,
//             message: "Wrong Credentials",
//           });
//         }
//       });
//     } else {
//       res.status(400).json({
//         error: err,
//         message: "No user exists with this email id",
//       });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
const loginUser = async (req, res) => {
     const { email, password } = req.body;
     try {
          const user = await UserModel.find({ email });

          const hashed_pass = user[0]?.password;
          if (user.length > 0) {
               bcrypt.compare(password, hashed_pass, (err, result) => {
                    if (result) {
                         // Set token expiration (e.g., 1 hour)
                         const expiresIn = 60 * 60; // 1 hour in seconds

                         // Sign the token with expiresIn option
                         const token = jwt.sign(
                              { userID: user[0]?._id },
                              process.env.key,
                              {
                                   expiresIn,
                              }
                         );

                         res.send({
                              message: "Login Successful",
                              token: token,
                         });
                    } else {
                         return res.status(400).json({
                              error: err,
                              message: "Wrong Credentials",
                         });
                    }
               });
          } else {
               res.status(400).json({
                    error: err,
                    message: "No user exists with this email id",
               });
          }
     } catch (error) {
          res.status(400).json({ error: error.message });
     }
};

module.exports = {
  loginUser,
  signUpUser,
};
