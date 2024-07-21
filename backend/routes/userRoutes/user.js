const express = require("express");
const router = express.Router();
const signup = require("./signup");
const login = require("./login");
const User = require("../../models/User");

router.use("/signup", signup);
router.use("/login", login);
router.delete("/logout", (req, res) => {
  res.clearCookie("user").send("Logged out successfully");
});

router.get("/", (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");

  const user = User.findById(req.cookies.user, { username: 1, email: 1 });
  if (!user) return res.status(404).send("User not found");

  res.status(200).json(user);
});

router.delete("/", (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");

  const user = User.findByIdAndDelete(req.cookies.user);
  if (!user) return res.status(404).send("User not found");
  res.clearCookie("user");

  res.status(200).send("User deleted successfully");
});

router.patch("/", (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");

  const user = User.findByIdAndUpdate(req.cookies.user, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return res.status(404).send("User not found");

  res.status(200).send("User updated successfully");
});

module.exports = router;
