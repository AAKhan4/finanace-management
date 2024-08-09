const walletService = require("../services/walletService");

exports.getWallets = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(await walletService.findByUser(req.cookies.user));
};

exports.getById = async (req, res) => {
  const wallet = await walletService.findById(req.params.id);
  if (wallet.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(wallet);
};

exports.createWallet = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (!req.body.name || !req.body.type || !req.body.balance)
    return res.status(400).json({ message: "Missing required fields" });

  res
    .status(201)
    .json(
      await walletService.createWallet(
        req.body.name,
        req.body.type,
        req.body.balance,
        req.cookies.user
      )
    );
};

exports.updateWallet = async (req, res) => {
  let wallet = await walletService.findById(req.params.id);
  if (wallet.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (req.body.user)
    return res.status(400).json({ message: "Cannot change wallet user" });

  if (!(req.body.name || req.body.type || req.body.balance))
    return res.status(400).json({ message: "Missing fields to update" });

  wallet = await walletService.updateWallet(req.params.id, req.body);
};

exports.deleteWallet = async (req, res) => {
  let wallet = await walletService.findById(req.params.id);
  if (wallet.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  await walletService.deleteWallet(req.params.id);
  res.status(200).json({ message: "Wallet deleted" });
};
