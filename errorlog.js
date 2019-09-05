const settings = require('./settings');
const mongoose = require('mongoose');
const Error = require('./models/Error');

const connString = settings.MONGO_STRING;

const log = (err, data) => {
  mongoose.connect(connString, { useNewUrlParser: true }, async () => {
    console.log('Connected to MongoDB...');
    const error = new Error({
      error: err,
      data: data
    });

    try {
      const response = await error.save();
      console.log(response);
      mongoose.disconnect();
    } catch (er) {
      console.error(er);
      mongoose.disconnect();
    }
  });
};

module.exports = {
  log
};
