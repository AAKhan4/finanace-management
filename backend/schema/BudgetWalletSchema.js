const mongoose = require("mongoose");

const budgetWalletSchema = new mongoose.Schema({
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "budget",
    required: true,
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wallet",
    required: true,
  },
});
const budgetWallet = mongoose.model("budgetWallet", budgetWalletSchema);
module.exports = budgetWallet;
