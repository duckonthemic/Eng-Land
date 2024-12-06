require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

const checkoutRoutes = require('./routes/checkout');
app.use('/api/checkout', checkoutRoutes);

// Cho phép truy cập file ảnh trong thư mục uploads
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log('Đã kết nối MongoDB'))
.catch(err=>console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req,res)=>{
  res.send('API đang chạy...');
});

const PORT=process.env.PORT||5000;
app.listen(PORT, ()=>console.log(`Server chạy cổng ${PORT}`));
