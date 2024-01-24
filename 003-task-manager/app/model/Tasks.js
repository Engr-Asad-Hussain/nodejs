const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field 'name' is required."],
    trim: true,
    maxlength: [20, "Field 'name' cannot be more than 20 characters."]
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)