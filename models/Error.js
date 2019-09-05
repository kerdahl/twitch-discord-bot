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
    type: Object,
    required: false
  }
});

module.exports = mongoose.model('Errors', ErrorSchema);
