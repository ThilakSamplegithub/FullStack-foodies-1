const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: 6, // Set your desired minimum password length
    max:14
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // match: /^\S+@\S+\.\S+$/, // Basic email format validation
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel};
