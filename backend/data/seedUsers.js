// seedUsers.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Kết nối MongoDB thành công để seed dữ liệu User!'))
  .catch(err => console.log('Lỗi kết nối MongoDB:', err));

async function seedUsers() {
  try {
    // Xoá dữ liệu cũ trong collection User
    await User.deleteMany({});
    console.log('Đã xoá dữ liệu cũ trong User collection');

    // Dữ liệu giả định
    const usersData = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: '123456' // Mật khẩu sẽ được hash khi save
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        password: 'abcdef'
      }
    ];

    // Dùng vòng lặp để tạo và save từng user, giúp pre('save') hook được kích hoạt
    for (const u of usersData) {
      const user = new User(u);
      await user.save(); // Tại đây password sẽ được mã hóa
    }

    console.log('Đã thêm dữ liệu user giả định thành công!');
  } catch (err) {
    console.log('Lỗi khi seed dữ liệu User:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedUsers();
