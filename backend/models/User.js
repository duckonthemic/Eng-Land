const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  avatar:    { type: String },
  coursesBought: [
    {
      id: String,
      title: String,
      price: Number
    }
  ],
  orders: [
    {
      id: String,
      date: Date,
      courses: [
        {
          id: String,
          title: String,
          price: Number
        }
      ],
      totalPrice: Number
    }
  ]
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
