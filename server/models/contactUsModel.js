const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  help:String,
});

module.exports = mongoose.model('Contact', contactSchema);
