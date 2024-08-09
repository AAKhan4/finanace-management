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
