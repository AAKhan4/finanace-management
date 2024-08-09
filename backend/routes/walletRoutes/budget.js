const express = require("express");
const router = express.Router();
const budgetController = require("../../controllers/budgetController");
const Budget = require("../../schema/BudgetSchema");
const BudgetWallet = require("../../schema/BudgetWalletSchema");
const BudgetCategory = require("../../schema/BudgetCategorySchema");
const mongoose = require("mongoose");

router.get("/", budgetController.getByUser);

router.get("/:id", budgetController.getById);

router.get("/category/:categories", budgetController.getByCategories);

router.get("/wallet/:wallets", budgetController.getByWallets);

router.post("/", budgetController.createBudget);

router.patch("/:id", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    budget.amount = req.body.amount;
    budget.type = req.body.type;
    budget.duration = req.body.duration;
    const updatedBudget = await budget.save();
    res.status(200).json(updatedBudget);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id/categories", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    if (await BudgetWallet.findOne({ budget: budget._id }))
      return res.status(400).json({
        message: "Budget is associated with wallet(s), cannot change category.",
      });

    await BudgetCategory.deleteMany({ budget: budget._id });

    const categoryIDs = req.body.categoryIDs.split(",");
    categoryIDs.map((categoryID) => {
      const budgetCategory = new BudgetCategory({
        budget: budget._id,
        category: categoryID,
      });
      budgetCategory.save();
    });

    res.status(200).json({ message: "Categories updated." });
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id/categories", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    await BudgetCategory.deleteMany({ budget: budget._id });
    res.status(200).json({ message: "Categories deleted." });
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id/wallets", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    if (await BudgetCategory.findOne({ budget: budget._id }))
      return res.status(400).json({
        message: "Budget is associated with category, cannot change wallets.",
      });

    await BudgetWallet.deleteMany({ budget: budget._id });

    const walletIDs = req.body.walletIDs.split(",");
    walletIDs.map((walletID) => {
      const budgetWallet = new BudgetWallet({
        budget: budget._id,
        wallet: walletID,
      });
      budgetWallet.save();
    });

    res.status(200).json({ message: "Wallets updated." });
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id/wallets", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    await BudgetWallet.deleteMany({ budget: budget._id });
    res.status(200).json({ message: "Wallets deleted." });
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    await BudgetWallet.deleteMany({ budget: budget._id });
    await budget.remove();
    res.status(200).json({ message: "Budget deleted." });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
