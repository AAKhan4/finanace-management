const Job = require("../schema/JobSchema");
const Transaction = require("../schema/TransactionSchema");
const { queue } = require("./queue");

exports.createJob = async (type, description, user, data) => {
  try {
    const job = new Job({
      type,
      description,
      user,
      data,
    });
    return await job.save();
  } catch (e) {
    console.log(e);
  }
};

exports.getJobsByUser = async (user) => {
  try {
    return await Job.find({ user });
  } catch (e) {
    console.log(e);
  }
};

exports.getJobById = async (id) => {
  try {
    return await Job.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.deleteJob = async (id) => {
  try {
    return await Job.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};

exports.scheduleTransactionRecurrence = async (types) => {
  types.forEach(async (type) => {
    const currentDate = Date.now();
    const lastRun = await Job.findOne({
      type: "transactionRecurrence",
      "data.type": type,
      date: {
        $gte: new Date(currentDate.setHours(0, 0, 0, 0)),
        $lt: new Date(currentDate.setHours(23, 59, 59, 999)),
      },
    });
    if (lastRun) return;

    const job = new Job({
      type: "transactionRecurrence",
      description: "Recurring transactions",
      data: { type },
    });

    try {
      await job.save();
    } catch (e) {
      console.log(e);
    }
    queue.add(job, { repeat: { cron: "0 2 * * *" } });
  });
};
