const express = require("express");
const router = express.Router();
const Budget = require("../../models/Budget");
const BudgetWallet = require("../../models/BudgetWallet");
const BudgetCategory = require("../../models/BudgetCategory");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.cookies.user });
    res.status(200).json(budgets);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (budget.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });
  } catch (err) {
    res.json({ message: err });
  }

  res.status(200).json(budget);
});

router.get("/category/:ids", async (req, res) => {
  try {
    const ids = req.params.ids
      .split(",")
      .map((id) => mongoose.Types.ObjectId(id));

    const budgetIDs = await BudgetCategory.aggregate(
      [
        { $match: { category: { $in: ids } } },
        { $group: { _id: "$_id", categoryCount: { $sum: 1 } } },
        { $match: { categoryCount: ids.length } },
      ],
      { budget: 1 }
    );

    const budgets = await Budget.find({
      _id: { $in: budgetIDs },
      user: req.cookies.user,
    });
    res.status(200).json(budgets);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/wallet/:ids", async (req, res) => {
  try {
    const ids = req.params.ids
      .split(",")
      .map((id) => mongoose.Types.ObjectId(id));

    const budgetIDs = await BudgetWallet.aggregate(
      [
        { $match: { wallet: { $in: ids } } },
        { $group: { _id: "$_id", walletCount: { $sum: 1 } } },
        { $match: { walletCount: ids.length } },
      ],
      { budget: 1 }
    );

    const budgets = await Budget.find({
      _id: { $in: budgetIDs },
      user: req.cookies.user,
    });
    res.status(200).json(budgets);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const budget = new Budget({
    amount: req.body.amount,
    type: req.body.type,
    duration: req.body.duration,
    category: req.body.category,
    user: req.cookies.user,
  });

  try {
    const savedBudget = await budget.save();
    req.body.wallets.map((wallet) => {
      const budgetWallet = new BudgetWallet({
        budget: savedBudget._id,
        wallet: wallet,
      });
      budgetWallet.save();
    });
    res.status(201).json(savedBudget);
  } catch (err) {
    res.json({ message: err });
  }
});

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
