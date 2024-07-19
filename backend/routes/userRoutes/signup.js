const express = require("express");
const router = express.Router();
const User = require("../../schema/UserSchema");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");

router.post("/", async (req, res) => {
  try {
    if (!(req.body.username && req.body.email && req.body.password))
      res.status(400).send("Required fields are missing");

    if (await User.findOne({ email: req.body.email }))
      return res.status(409).send("Email already in use");

    req.body.password = await bcrypt.hash(req.body.password, 11);
    let user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    user = await user.save();
    res
      .cookie("user", generateToken(user._id), {
        path: "/",
        expires: new Date(Date.now() + 86400000),
        secure: true,
        httpOnly: true,
      })
      .status(201)
      .send("User registered");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
