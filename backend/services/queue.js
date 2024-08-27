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
    if (await transactionRecurrence(Date.now(), job.data.type))
      job.status = "completed";
    else job.status = "failed";
    return job;
  }
});

const addJob = async (job) => {
  await queue.add(job);
};

module.exports = {
  queue,
  addJob,
};
