// routes/checkout.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');

// POST /api/checkout
// Body: { courses: [ {id, title, price}, ...], fullName, bankName, accountNumber }
// Mục đích:
// - Kiểm tra user từ token
// - Thêm courses vào user.coursesBought (nếu chưa có)
// - Tạo một order mới lưu vào user.orders
// - Lưu user
// - Trả về thông báo thành công, order, và user info cơ bản
router.post('/', verifyToken, async (req, res) => {
  const { courses, fullName, bankName, accountNumber } = req.body;
  if (!courses || courses.length === 0) {
    return res.status(400).json({ message: 'Giỏ hàng rỗng' });
  }

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User không tồn tại' });

    user.coursesBought = user.coursesBought || [];

    // Thêm các khóa học mới vào danh sách đã mua, nếu chưa có
    const newCourses = [];
    for (const c of courses) {
      const exists = user.coursesBought.find(x => x.id === c.id);
      if (!exists) {
        user.coursesBought.push(c);
        newCourses.push(c);
      }
    }

    const totalPrice = courses.reduce((sum, c) => sum + (c.price || 0), 0);

    // Tạo đơn hàng
    const order = {
      id: Date.now().toString(),
      date: new Date(),
      courses: courses,
      totalPrice: totalPrice
    };
    user.orders = user.orders || [];
    user.orders.push(order);

    // Mark modified để Mongoose nhận biết thay đổi trong mảng
    user.markModified('coursesBought');
    user.markModified('orders');

    await user.save();

    // Return updated user (without password)
    res.json({
      message: 'Thanh toán thành công',
      order,
      user: {
        avatar: user.avatar,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
