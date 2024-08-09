const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.get("/", transactionController.getTransactions);

router.get("/:id", transactionController.getById);

router.get("/wallet/:wallet", transactionController.getByWallet);

router.get("/category/:category", transactionController.getByCategory);

router.get("/type/:type", transactionController.getByType);

router.post("/", transactionController.createTransaction);

router.patch("/:id", transactionController.updateTransaction);

router.patch("/:id/category", transactionController.updateTransactionCategory);

router.patch("/:id/wallet", transactionController.updateTransactionWallet);

router.patch("/:id/type", transactionController.updateTransactionType);

router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
