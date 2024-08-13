const Transaction = require("../../schema/TransactionSchema");
const Budget = require("../../schema/BudgetSchema");

exports.getSpendingsByCategory = async (id, startDate, endDate) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: id,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "_id",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $project: {
        _id: 0,
        category: "$category.name",
        total: 1,
      },
    },
  ]);
};

exports.getSpendingsByWallet = async (id, startDate, endDate) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: id,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: "$wallet",
        total: { $sum: "$amount" },
      },
    },
    {
      $lookup: {
        from: "wallets",
        localField: "_id",
        foreignField: "_id",
        as: "wallet",
      },
    },
    {
      $project: {
        _id: 0,
        wallet: "$wallet.name",
        total: 1,
      },
    },
  ]);
};

exports.getSpendingOverTime = async (id, startDate, endDate, interval) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: id,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$date" },
          week: { $week: "$date" },
          month: { $month: "$date" },
          year: { $year: "$date" },
        }[interval],
        total: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        date: "$_id",
        total: 1,
      },
    },
  ]);
};

exports.getSpendingByBudget = async (id, startDate, endDate) => {
  const budgets = await Budget.find({ user: id });

  let transactions = [];

  for (const budget of budgets) {
    const categoryTransactions = await getSpendingByBudgetCategory(
      id,
      startDate,
      endDate,
      budget
    );
    const walletTransactions = await getSpendingByBudgetWallet(
      id,
      startDate,
      endDate,
      budget
    );

    categoryTransactions
      ? transactions.push(categoryTransactions)
      : transactions.push(walletTransactions);
  }

  return transactions;
};

const getSpendingByBudgetCategory = async (id, startDate, endDate, budget) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: id,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$date" },
          week: { $week: "$date" },
          month: { $month: "$date" },
          year: { $year: "$date" },
        }[budget.type],
        total: { $sum: "$amount" },
      },
    },
    {
      $lookup: {
        from: "budgetCategory",
        localField: "category",
        foreignField: "category",
        as: "budgetCategory",
      },
    },
    {
      $unwind: "$budgetCategory",
    },
    {
      $match: {
        "budgetCategory.budget": budget._id,
      },
    },
    {
      $project: {
        _id: 0,
        budget: budget.name,
        budgetAmount: budget.amount,
        total: 1,
      },
    },
  ]);
};

const getSpendingByBudgetWallet = async (id, startDate, endDate, budget) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: id,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$date" },
          week: { $week: "$date" },
          month: { $month: "$date" },
          year: { $year: "$date" },
        }[budget.type],
        total: { $sum: "$amount" },
      },
    },
    {
      $lookup: {
        from: "budgetWallet",
        localField: "wallet",
        foreignField: "wallet",
        as: "budgetWallet",
      },
    },
    {
      $unwind: "$budgetWallet",
    },
    {
      $match: {
        "budgetWallet.budget": budget._id,
      },
    },
    {
      $project: {
        _id: 0,
        budget: budget.name,
        budgetAmount: budget.amount,
        total: 1,
      },
    },
  ]);
};
