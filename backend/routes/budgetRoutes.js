const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetController");

router.get("/", budgetController.getByUser);

router.get("/:id", budgetController.getById);

router.get("/category/:categories", budgetController.getByCategories);

router.get("/wallet/:wallets", budgetController.getByWallets);

router.post("/", budgetController.createBudget);

router.patch("/:id", budgetController.updateBudget);

router.patch("/:id/categories", budgetController.updateCategories);

router.patch("/:id/wallets", budgetController.updateWallets);

router.delete("/:id", budgetController.deleteBudget);

module.exports = router;
