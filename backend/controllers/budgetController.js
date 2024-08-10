const mongoose = require("mongoose");
const budgetService = require("../services/budgetService");

exports.getByUser = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(await budgetService.findByUser(req.cookies.user));
};

exports.getById = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const budget = await budgetService.findById(req.params.id);
  if (budget.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(budget);
};

exports.getByCategories = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const categories = req.params.categories
    .split(",")
    .map((cat) => mongoose.Types.ObjectId(cat));
  if (!categories)
    return res.status(400).json({ message: "Missing categories" });

  res
    .status(200)
    .json(await budgetService.findByCategories(categories, req.cookies.user));
};

exports.getByWallets = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const wallets = req.params.wallets
    .split(",")
    .map((id) => mongoose.Types.ObjectId(id));
  if (!wallets) return res.status(400).json({ message: "Missing wallets" });

  res
    .status(200)
    .json(await budgetService.findByWallets(wallets, req.cookies.user));
};

exports.createBudget = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (
    !req.body.amount ||
    !req.body.type ||
    !req.body.duration ||
    !req.body.categories ||
    !req.body.wallets
  )
    return res.status(400).json({ message: "Missing fields" });

  const budget = await budgetService.createBudget(
    req.body.amount,
    req.body.type,
    req.body.duration,
    req.cookies.user
  );
  if (!budget)
    return res.status(500).json({ message: "Failed to create budget" });

  budgetService.addCategories(budget._id, req.body.categories);
  budgetService.addWallets(budget._id, req.body.wallets);
  res.status(201).json(budget);
};

exports.updateBudget = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const budget = await budgetService.findById(req.params.id);
  if (budget.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (!req.body.amount || !req.body.type || !req.body.duration)
    return res.status(400).json({ message: "Missing fields" });

  res
    .status(200)
    .json(await budgetService.updateBudget(req.params.id, req.body));
};

exports.updateCategories = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const budget = await budgetService.findById(req.params.id);
  if (budget.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (await budgetService.hasWallets(req.params.id))
    return res.status(400).json({
      message: "Budget is associated with wallet(s), cannot change category.",
    });

  if (!req.body.categories)
    return res.status(400).json({ message: "Missing fields" });

  const categories = req.body.categories.map((cat) =>
    mongoose.Types.ObjectId(cat)
  );

  await budgetService.deleteCategories(req.params.id);

  await budgetService.addCategories(req.params.id, categories);
  res.status(200).json({ message: "Categories updated." });
};

exports.updateWallets = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const budget = await budgetService.findById(req.params.id);
  if (budget.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (await budgetService.hasCategories(req.params.id))
    return res.status(400).json({
      message: "Budget is associated with category(s), cannot change wallet.",
    });

  if (!req.body.wallets)
    return res.status(400).json({ message: "Missing fields" });

  const wallets = req.body.wallets.map((wallet) =>
    mongoose.Types.ObjectId(wallet)
  );

  await budgetService.deleteWallets(req.params.id);

  await budgetService.addWallets(req.params.id, wallets);
  res.status(200).json({ message: "Wallets updated." });
};

exports.deleteBudget = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const budget = await budgetService.findById(req.params.id);
  if (budget.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  await budgetService.deleteBudget(req.params.id);
  res.status(200).json({ message: "Budget deleted." });
};
