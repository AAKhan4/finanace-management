const express = require("express");
const router = express.Router();
const Wallet = require("../../schema/WalletSchema");

router.get("/", async (req, res) => {
  try {
    const wallets = await Wallet.find({ user: req.cookies.user });
    res.status(200).json(wallets);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);
    if (wallet.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json(wallet);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const wallet = new Wallet({
    name: req.body.name,
    type: req.body.type,
    balance: req.body.balance,
    user: req.cookies.user,
  });

  try {
    const savedWallet = await wallet.save();
    res.status(201).json(savedWallet);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);
    if (wallet.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    wallet.name = req.body.name;
    wallet.type = req.body.type;
    wallet.balance = req.body.balance;

    const savedWallet = await wallet.save();
    res.status(200).json(savedWallet);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);
    if (wallet.user != req.cookies.user)
      return res.status(401).json({ message: "Unauthorized" });

    await wallet.remove();
    res.status(200).json({ message: "Wallet deleted" });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
