const mongoose = require("mongoose");

const budgetCategorySchema = new mongoose.Schema({
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "budget",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});
const budgetCategory = mongoose.model("budgetCategory", budgetCategorySchema);
module.exports = budgetCategory;
