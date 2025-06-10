const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: String,
  image: String,
});

module.exports = mongoose.model('Content', contentSchema);