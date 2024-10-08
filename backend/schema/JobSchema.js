const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  data: {
    type: Object,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const job = mongoose.model("job", jobSchema);
module.exports = job;
