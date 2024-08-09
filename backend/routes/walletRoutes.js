const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const wallet = require("../schema/WalletSchema");

router.get("/", walletController.getWallets);

router.get("/:id", walletController.getById);

router.post("/", walletController.createWallet);

router.patch("/:id", walletController.updateWallet);

router.delete("/:id", walletController.deleteWallet);

module.exports = router;
