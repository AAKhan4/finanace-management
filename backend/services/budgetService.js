const BudgetCategory = require('../schema/BudgetCategorySchema');

exports.deleteCategoryRelationMany = async (catID) => {
    try {
      await BudgetCategory.deleteMany({ category: catID });
    } catch (e) {
      console.log(e);
    }
  };