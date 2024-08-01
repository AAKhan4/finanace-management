const express = require("express");
const router = express.Router();
const Transaction = require("../../models/Transaction");

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.cookies.user });
    res.status(200).json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });
  } catch (err) {
    res.json({ message: err });
  }

  res.status(200).json(transaction);
});

router.get("/wallet/:id", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      wallet: req.params.id,
      user: req.cookies.user,
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      category: req.params.id,
      user: req.cookies.user,
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/type/:type", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      type: req.params.type,
      user: req.cookies.user,
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const transaction = new Transaction({
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category,
    wallet: req.body.wallet,
    user: req.cookies.user,
    description: req.body.description,
  });

  try {
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    transaction.amount = req.body.amount;
    transaction.description = req.body.description;
    const updatedTransaction = await transaction.save();
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id/category", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    transaction.category = req.body.category;
    const updatedTransaction = await transaction.save();
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id/wallet", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    transaction.wallet = req.body.wallet;
    const updatedTransaction = await transaction.save();
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id/type", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    transaction.type = req.body.type;
    const updatedTransaction = await transaction.save();
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    await transaction.remove();
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    res.json({ message: err });
  }
});
