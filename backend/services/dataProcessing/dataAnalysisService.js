const Transaction = require("../../schema/TransactionSchema");

exports.getTransactionsMean = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  const total = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  return total / transactions.length;
};

exports.getTransactionsMedian = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  const sortedTransactions = transactions
    .map((transaction) => transaction.amount)
    .sort((a, b) => a - b);
  const middle = Math.floor(sortedTransactions.length / 2);
  if (sortedTransactions.length % 2 === 0) {
    return (sortedTransactions[middle - 1] + sortedTransactions[middle]) / 2;
  }
  return sortedTransactions[middle];
};

exports.getTransactionsMode = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  const amounts = transactions.map((transaction) => transaction.amount);
  const mode = amounts.reduce((acc, amount) => {
    acc[amount] = (acc[amount] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(mode).reduce((a, b) => (mode[a] > mode[b] ? a : b));
};

exports.getTransactionsSD = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  const mean = await getTransactionsMean(userId, startDate, endDate);
  const variance = transactions.reduce(
    (acc, transaction) => acc + Math.pow(transaction.amount - mean, 2),
    0
  );
  return Math.sqrt(variance / transactions.length);
};

exports.getTransactionsTotal = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
};

exports.getTransactionsMin = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  return transactions.reduce(
    (acc, transaction) => (transaction.amount < acc ? transaction.amount : acc),
    transactions[0].amount
  );
};

exports.getTransactionsMax = async (userId, startDate, endDate) => {
  const transactions = await Transaction.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  });
  return transactions.reduce(
    (acc, transaction) => (transaction.amount > acc ? transaction.amount : acc),
    transactions[0].amount
  );
};
