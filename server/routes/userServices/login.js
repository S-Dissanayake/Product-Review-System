const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../../model/CommonUser/Register");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "this is the login route" });
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const userFromDb = await User.findOne({
    email: email,
  }).lean();

  // console.log(userFromDb);

  try {
    if (await bcrypt.compare(password, userFromDb.password)) {
      const webToken = jwt.sign(
        {
          id: userFromDb._id,
          email: userFromDb.email,
        },
        process.env.JWT_SECRET
      );

      res.json({
        status: "200 OK",
        token: webToken,
        message: "user Information Successfully Validated",
        user: userFromDb,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: "Error",
      errorMessage: error.message,
      message: "username / password is not valid",
    });
  }
});

module.exports = router;
