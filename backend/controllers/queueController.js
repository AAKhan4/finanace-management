const { addJob } = require("../services/queue");
const jobService = require("../services/jobService");

exports.queueJob = async (req, res) => {
  const { jobId } = req.body;
  const job = await jobService.getJobById(jobId);
  addJob(job)
    .then(() => {
      res.status(200).send("Job added to the queue");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

exports.createJob = async (req, res) => {
  const jobs = await jobService.getJobsByUser(user);
  if (jobs.length >= 5) {
    const oldestJob = jobs.sort((a, b) => a.date - b.date)[0];
    await jobService.deleteJob(oldestJob.id);
  }

  const { type, description, user, data } = req.body;
  jobService
    .createJob(type, description, user, data)
    .then((job) => {
      res.status(200).send(job);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

exports.getJobsByUser = async (req, res) => {
  const user = req.cookies.user;
  jobService
    .getJobsByUser(user)
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
