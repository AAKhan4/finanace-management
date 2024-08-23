const { addJob } = require("../services/queue");

exports.addJob = async (req, res) => {
  const job = req.body;
  addJob(job)
    .then(() => {
      res.status(200).send("Job added to the queue");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
