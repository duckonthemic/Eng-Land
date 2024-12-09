const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');
const bcrypt = require('bcrypt');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ message:'User not found' });
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if(!isMatch) return res.status(400).json({ message:'Mật khẩu cũ không đúng' });

    user.password = newPassword; 
    await user.save();
    res.json({ message:'Đổi mật khẩu thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/avatar', verifyToken, upload.single('avatar'), async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ message:'User not found' });

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    user.avatar = `/uploads/${req.file.filename}`;
    await user.save();
    res.json({ message:'Avatar updated', avatar: user.avatar });
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/courses', verifyToken, async (req,res) => {
  try {
    const user = await User.findById(req.userId).populate('coursesBought');
    if(!user) return res.status(404).json({ message:'User not found' });
    res.json({ courses: user.coursesBought || [] });
  } catch(err){
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
