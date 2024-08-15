const Queue = require("bull");
const redisClient = require("./redis");

const queue = new Queue("myQueue", {
  redis: {
    host: "localhost",
    port: process.env.REDIS_PORT,
  },
});

queue.process(async (job) => {
  console.log(job.data);
  return job.data;
});

const addJob = async (job) => {
  await queue.add(job);
};

module.exports = {
    queue,
    addJob,
};
