const Budget = require("../schema/BudgetSchema");
const BudgetWallet = require("../schema/BudgetWalletSchema");
const BudgetCategory = require("../schema/BudgetCategorySchema");

exports.deleteCategoryRelationMany = async (catID) => {
  try {
    await BudgetCategory.deleteMany({ category: catID });
  } catch (e) {
    console.log(e);
  }
};

exports.findByUser = async (user) => {
  try {
    return await Budget.find({ user });
  } catch (e) {
    console.log(e);
  }
};

exports.findById = async (id) => {
  try {
    return await Budget.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.findByCategories = async (categories, user) => {
  try {
    const budgetIDs = await BudgetCategory.aggregate(
      [
        { $match: { category: { $in: categories } } },
        { $group: { _id: "$_id", categoryCount: { $sum: 1 } } },
        { $match: { categoryCount: ids.length } },
      ],
      { budget: 1 }
    );

    return await Budget.find({
      _id: { $in: budgetIDs },
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.findByWallets = async (wallets, user) => {
  try {
    const budgetIDs = await BudgetWallet.aggregate(
      [
        { $match: { wallet: { $in: wallets } } },
        { $group: { _id: "$_id", walletCount: { $sum: 1 } } },
        { $match: { walletCount: wallets.length } },
      ],
      { budget: 1 }
    );

    return await Budget.find({
      _id: { $in: budgetIDs },
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.createBudget = async (amount, type, duration, user) => {
  try {
    const budget = new Budget({
      amount,
      type,
      duration,
      user,
    });

    return await budget.save();
  } catch (e) {
    console.log(e);
  }
};

exports.addWallets = async (id, wallets) => {
  try {
    wallets.map((wallet) => {
      if (wallet === "") return;
      const budgetWallet = new BudgetWallet({
        budget: id,
        wallet,
      });
      budgetWallet.save();
    });
  } catch (e) {
    console.log(e);
  }
};

exports.addCategories = async (id, categories) => {
  try {
    categories.map((category) => {
      if (category === "") return;
      const budgetCategory = new BudgetCategory({
        budget: id,
        category,
      });
      budgetCategory.save();
    });
  } catch (e) {
    console.log(e);
  }
};

exports.hasWallets = async (id) => {
  try {
    return await BudgetWallet.findOne({ budget: id });
  } catch (e) {
    console.log(e);
  }
};

exports.hasCategories = async (id) => {
  try {
    return await BudgetCategory.findOne({ budget: id });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteWalletsFromBudget = async (id) => {
  try {
    await BudgetWallet.deleteMany({ budget: id });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteCategoriesFromBudget = async (id) => {
  try {
    await BudgetCategory.deleteMany({ budget: id });
  } catch (e) {
    console.log(e);
  }
};

exports.updateBudget = async (id, data) => {
  try {
    const budget = await Budget.findById(id);
    if (data.amount) budget.amount = data.amount;
    if (data.type) budget.type = data.type;
    if (data.duration) budget.duration = data.duration;

    return await budget.save();
  } catch (e) {
    console.log(e);
  }
};

exports.deleteBudget = async (id) => {
  try {
    await BudgetWallet.deleteMany({ budget: id });
    await BudgetCategory.deleteMany({ budget: id });
    await Budget.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};
