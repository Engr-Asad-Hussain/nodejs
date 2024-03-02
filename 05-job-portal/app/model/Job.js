const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Field 'company' is required."],
    maxlength: [50, "Field 'company' must not exceeds 50 charactes."],
    trim: true
  },
  position: {
    type: String,
    required: [true, "Field 'position' is required."],
    maxlength: [100, "Field 'position' must not exceeds 100 charactes."],
    trim: true
  },
  status: {
    type: String,
    enum: {
      values: ['Applied', 'Progress', 'Rejected', 'Success'],
      message: '{VALUE} is not supported.'
    },
    default: 'Applied'
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user reference.']
  }
}, {
  timestamps: true
  // timestamps will help us to add createdAt and updatedAt fields automatically for each record.
})

module.exports = mongoose.model('Job', JobSchema)