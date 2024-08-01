const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");
const Transaction = require("../../models/Transaction");
const Budget = require("../../models/Budget");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({ user: req.cookies.user });
    res.status(200).json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });
  } catch (err) {
    res.json({ message: err });
  }

  res.status(200).json(category);
});

router.post("/", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
    user: req.cookies.user,
  });

  try {
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    category.name = req.body.name;
    category.description = req.body.description;

    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    const other = await Category.findOne({
      name: "Other",
      user: req.cookies.user,
    });
    await Transaction.updateMany(
      { category: req.params.id },
      { category: other._id },
      { runValidators: true }
    );

    await Budget.deleteMany({ category: req.params.id });
    await category.remove();
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
