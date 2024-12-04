const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

// Lấy tất cả bài học
router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy bài học theo ID
router.get('/:id', getLesson, (req, res) => {
  res.json(res.lesson);
});

// Thêm bài học mới
router.post('/', async (req, res) => {
  const lesson = new Lesson({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
  });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware để lấy bài học theo ID
async function getLesson(req, res, next) {
  let lesson;
  try {
    lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Không tìm thấy bài học' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.lesson = lesson;
  next();
}

module.exports = router;
