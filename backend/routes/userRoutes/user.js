const express = require("express");
const router = express.Router();
const signup = require("./signup");
const login = require("./login");
const User = require("../../schema/UserSchema");

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

  if (req.body.password)
    return res
      .status(400)
      .send("Password cannot be updated through this route");

  const user = User.findByIdAndUpdate(req.cookies.user, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return res.status(404).send("User not found");

  res.status(200).send("User updated successfully");
});

router.patch("/password", (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");

  if (!(req.body.password && req.body.newPassword))
    return res.status(400).send("Password & new Password is required");

  const user = User.findById(req.cookies.user);
  if (!user) return res.status(404).send("User not found");

  if (!bcrypt.compare(req.body.password, user.password))
    return res.status(401).send("Invalid password");

  User.findByIdAndUpdate(
    req.cookies.user,
    { password: req.body.newPassword },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).send("Password updated successfully");
});

module.exports = router;
