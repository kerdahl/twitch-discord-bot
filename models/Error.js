const mongoose = require('mongoose');

const ErrorSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  error: {
    type: String,
    required: true
  },
  data: {
    type: String,
    set: function(data) {
      return JSON.stringify(data);
    }
  }
});

module.exports = mongoose.model('Errors', ErrorSchema);
