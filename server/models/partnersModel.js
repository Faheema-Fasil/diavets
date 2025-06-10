const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
});

module.exports = mongoose.model('Partner', bannerSchema);
