const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const wallet = mongoose.model("wallet", walletSchema);
module.exports = wallet;
