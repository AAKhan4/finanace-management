require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const generateToken = require("../../utils/generateToken");
const User = require("../../schema/UserSchema");

router.post("/", async (req, res) => {
  try {
    if (!(req.body.email && req.body.password))
      return res.status(400).send("Required fields are missing");
    const user = await User.findOne({ email: req.body.email });
    if (!(user && (await bcrypt.compare(req.body.password, user.password))))
      return res.status(401).send("Invalid email or password");

    res
      .cookie("user", generateToken(user._id), {
        path: "/",
        expires: new Date(Date.now() + 86400000),
        secure: true,
        httpOnly: true,
      })
      .status(200)
      .send("Logged in successfully");
  } catch (e) {
    console.log(e);
  }
});

router.delete("/", async (req, res) => {
  try {
    res.clearCookie("user").status(200).send("Logged out successfully");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
