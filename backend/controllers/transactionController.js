const transactionService = require("../services/transactionService");

exports.getTransactions = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json(await transactionService.findByUser(req.cookies.user));
};

exports.getById = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(transaction);
};

exports.getByWallet = async (req, res) => {
  const transactions = await transactionService.findByWallet(
    req.params.wallet,
    req.cookies.user
  );
  res.status(200).json(transactions);
};

exports.getByCategory = async (req, res) => {
  const transactions = await transactionService.findByCategory(
    req.params.category,
    req.cookies.user
  );
  res.status(200).json(transactions);
};

exports.getByType = async (req, res) => {
  const transactions = await transactionService.findByType(
    req.params.type,
    req.cookies.user
  );
  res.status(200).json(transactions);
};

exports.createTransaction = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (
    !req.body.amount ||
    !req.body.type ||
    !req.body.category ||
    !req.body.wallet ||
    !req.body.description
  )
    return res.status(400).json({ message: "Missing required fields" });

  res
    .status(201)
    .json(
      await transactionService.createTransaction(
        req.body.amount,
        req.body.type,
        req.body.category,
        req.body.wallet,
        req.cookies.user,
        req.body.description
      )
    );
};

exports.updateTransaction = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const body = {};
  if (req.body.amount) body.amount = req.body.amount;
  if (req.body.description) body.description = req.body.description;

  res
    .status(200)
    .json(await transactionService.updateTransaction(req.params.id, body));
};

exports.updateTransactionCategory = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res
    .status(200)
    .json(
      await transactionService.updateCategory(req.params.id, req.body.category)
    );
};

exports.updateTransactionWallet = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res
    .status(200)
    .json(
      await transactionService.updateWallet(req.params.id, req.body.wallet)
    );
};

exports.updateTransactionType = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res
    .status(200)
    .json(await transactionService.updateType(req.params.id, req.body.type));
};

exports.deleteTransaction = async (req, res) => {
  const transaction = await transactionService.findById(req.params.id);
  if (transaction.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res
    .status(200)
    .json(await transactionService.deleteTransaction(req.params.id));
};
