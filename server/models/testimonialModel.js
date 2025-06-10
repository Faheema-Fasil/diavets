const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: String,
  bg: String,
  text: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
