const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field 'name' is require."],
    maxlength: [20, "Field 'name' has maximum 20 characters."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Field 'price' is required"],
  },
  rating: {
    type: Number,
    default: 3,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    enum: {
      values: ['Laptop', 'Mobile', 'Router', 'Television', 'Microphone'],
      message: '{VALUE} is not supported.'
    },
    // enum: ["Laptop", "Mobile", "Router", "Television", "Microphone"]
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = mongoose.model('Product', ProductSchema)