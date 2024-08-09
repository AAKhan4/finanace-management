const Transaction = require("../schema/TransactionSchema");

exports.swapCategoryMany = async (oldCat, newCat) => {
  try {
    await Transaction.updateMany(
      { category: oldCat.id },
      { category: newCat._id },
      { runValidators: true }
    );
  } catch (e) {
    console.log(e);
  }
};

exports.findByUser = async (user) => {
  try {
    return await Transaction.find({ user });
  } catch (e) {
    console.log(e);
  }
};

exports.findById = async (id) => {
  try {
    return await Transaction.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.findByWallet = async (wallet, user) => {
  try {
    return await Transaction.find({ wallet, user });
  } catch (e) {
    console.log(e);
  }
};

exports.findByCategory = async (category, user) => {
  try {
    return await Transaction.find({ category, user });
  } catch (e) {
    console.log(e);
  }
};

exports.findByType = async (type, user) => {
  try {
    return await Transaction.find({ type, user });
  } catch (e) {
    console.log(e);
  }
};

exports.createTransaction = async (amount, type, category, wallet, user, description) => {
  try {
    const transaction = new Transaction({
      amount,
      type,
      category,
      wallet,
      user,
      description,
    });
    return await transaction.save();
  } catch (e) {
    console.log(e);
  }
};

exports.updateTransaction = async (id, body) => {
  try {
    return await Transaction.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteTransaction = async (id) => {
  try {
    return await Transaction.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};
