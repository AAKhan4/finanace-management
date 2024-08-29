const Queue = require("bull");
const redisClient = require("./redis");
const { transactionRecurrence } = require("./transactionService");

const queue = new Queue("myQueue", {
  redis: {
    host: redisClient.options.host,
    port: redisClient.options.port,
  },
});

queue.process(async (job) => {
  if (job.type === "transactionRecurrence") {
    try {
      job.status = "processing";
      await job.save();
      const type = job.data.type;
      const date = Date.now();

      if (await transactionRecurrence(date, type)) job.status = "completed";
      else {
        console.log(
          "Recurrence handling failed for ",
          type,
          " transactions. Date: ",
          date
        );
        job.status = "failed";
      }
      await job.save();
      return job;
    } catch (error) {
      console.error("Error occurred while processing job:", error);
      job.status = "failed";
      await job.save();
      throw error;
    }
  }
});

const addJob = async (job) => {
  await queue.add(job);
};

module.exports = {
  queue,
  addJob,
};
