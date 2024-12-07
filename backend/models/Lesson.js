const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  content:     { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);
