const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signUp);

router.post("/login", userController.logIn);

router.delete("/logout", userController.logOut);

router.get("/", userController.getUser);

router.delete("/", userController.deleteUser);

router.patch("/", userController.updateUser);

router.patch("/password", userController.updateUserPassword);

module.exports = router;
