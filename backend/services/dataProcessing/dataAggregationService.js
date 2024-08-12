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

const getTransactionsByBudget = async (id, startDate, endDate) => {
  const budgets = {
    budget: await Budget.find({ user: id }),
    transactions: [],
  };

  budgets.budget.forEach((budget) => {
    budgets.transactions.push(
      Transaction.aggregate([
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
            _id: null,
            total: { $sum: "$amount" },
          },
        },
        {
          $lookup: {
            from: "budgetCategories",
          },
        },
        {
          $project: {
            _id: 0,
            category: budget.category,
            total: 1,
          },
        },
      ])
    );
  });
}
