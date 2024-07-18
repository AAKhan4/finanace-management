const express = require("express");
const router = express.Router();
const signup = require("./signup");
const login = require("./login");

router.use("/signup", signup);
router.use("/login", login);
router.delete("/logout", (req, res) => {
  res.clearCookie("token").send("Logged out successfully");
});

module.exports = router;
