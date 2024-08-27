const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
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
