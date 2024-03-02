const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field 'name' is required."],
    minlength: [3, "Field 'name' atleast of 3 characters or more."],
    maxlength: [50, "Field 'name' must not exceeds 50 charactes."],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Field 'email' is required."],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email address.'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Field 'password' is required."],
    minlength: 6
  }
});

// Used mongoose middleware to hash the password.
// before saving value - it will execute the .pre method.
// reference: https://mongoosejs.com/docs/middleware.html#pre
UserSchema.pre('save', async function () {
  // genSalt simple means random bytes.
  // as an argument we provide number of rounds. So how many random bytes will get.
  // the bigger the round value, the more random bytes will be added to the hash value.
  // it means the bigger the round value, the more secure password would be
  // and it will require more processing power to generate hash.
  const salt = await bcrypt.genSalt(10);

  // generate the hash of a password
  // save the value in the database `this.password`
  this.password = await bcrypt.hash(this.password, salt);
});

// Used mongoose instance method - bound to particular schema instance
UserSchema.methods.genToken = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    (secretOrPrivateKey = process.env.JWT_SECRET),
    { expiresIn: process.env.JWT_EXPIRY }
  );
};

// Used mongoose instance method strategy
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
