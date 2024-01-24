const mongoose = require('mongoose')

const connectDB = (uri) => {
  return mongoose.connect(uri, { dbName: 'task-manager'})
}

module.exports = connectDB