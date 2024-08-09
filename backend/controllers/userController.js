const userService = require("../services/userService");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");

exports.signUp = async (req, res) => {
  if (!(req.body.username && req.body.email && req.body.password))
    res.status(400).send("Required fields are missing");
  if (await userService.getUserByEmail(req.body.email))
    return res.status(409).send("Email already in use");

  req.body.password = await bcrypt.hash(req.body.password, 11);
  userService.createUser(req.body.username, req.body.email, req.body.password);

  res
    .cookie("user", generateToken(user._id), {
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
    })
    .status(201)
    .send("User registered");
};

exports.logIn = async (req, res) => {
  if (!(req.body.email && req.body.password))
    return res.status(400).send("Required fields are missing");

  const user = await userService.getUserByEmail(req.body.email);
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
};

exports.logOut = async (req, res) => {
  res.clearCookie("user").status(200).send("Logged out successfully");
};

exports.getUser = async (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");

  const user = userController.getUserById(req.cookies.user);
  if (!user) return res.status(404).send("User not found");

  user = {
    username: user.username,
    email: user.email,
  };

  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");
  if (!userService.deleteUser(req.cookies.user))
    return res.status(404).send("User not found");
  res.clearCookie("user");

  res.status(200).send("User deleted successfully");
};

exports.updateUser = async (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");
  if (req.body.password)
    return res
      .status(400)
      .send("Password cannot be updated through this route");

  const user = userService.updateUser(req.cookies.user, req.body);
  if (!user) return res.status(404).send("User not found");

  res.status(200).json({
    username: user.username,
    email: user.email,
  });
};

exports.updateUserPassword = async (req, res) => {
  if (!req.cookies.user) return res.status(401).send("You are not logged in");
  if (!(req.body.password && req.body.newPassword))
    return res.status(400).send("Password & new Password is required");

  const user = userService.getUserById(req.cookies.user);
  if (!user) return res.status(404).send("User not found");
  if (!bcrypt.compare(req.body.password, user.password))
    return res.status(401).send("Invalid password");

  user = userService.updateUser(req.cookies.user, {
    password: await bcrypt.hash(req.body.newPassword, 11),
  });

  res.status(200).json({
    username: user.username,
    email: user.email,
  });
};
