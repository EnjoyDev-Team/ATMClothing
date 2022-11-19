const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

// phone, name, gender, dob, email, photo, password, passwordConfirm

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your phone!']
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    // validate: [validator.isEmail, 'Please provide a valid email!']
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'male'
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minlength: 8,
    select: false
  },
  refreshToken: Array,
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12)

  next();
});  

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew)
    return next();
    
  this.passwordChangedAt = Date.now() - 1000;
  
  next();
})

userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({active: { $ne: false }})
  next();
})

userSchema.methods.correctPassword = async function(
  candidatePassword, 
  userPassword
  ) {
    // return candidatePassword === userPassword
  return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changedTimestamp = parseInt(this.passwordChangeAt.getTime() / 1000, 10)

    return JWTTimestamp < changedTimestamp;
  }
  
  // False means NOT changed
  return false;
}

const User = mongoose.model('User', userSchema);

module.exports = User;