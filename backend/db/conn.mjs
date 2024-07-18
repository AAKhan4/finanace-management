const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config('path:../.env');

const connect = async () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log('Connected to database');
      })
      .catch((e) => {
        console.log(e);
      });
};

module.exports = connect;
