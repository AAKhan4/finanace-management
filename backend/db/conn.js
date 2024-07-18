require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    mongoose
      .connect(process.env.ATLAS_URI)
      .then(() => {
        console.log('Connected to database');
      })
      .catch((e) => {
        console.log(e);
      });
};

const closeConnect = async () => {
    mongoose.connection.close();
};

module.exports = { connect, closeConnect };
