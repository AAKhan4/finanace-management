const redisClient = require("./redis");

exports.setCache = async (req, res) => {
  try {
    redisClient.set(req.cookies.user, req.body, (err, reply) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(reply);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCache = async (req, res) => {
  try {
    redisClient.get(req.cookies.user, (err, value) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).json(value);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
