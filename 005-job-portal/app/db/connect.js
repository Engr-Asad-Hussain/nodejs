const mongoose = require('mongoose')

const connectDB = (connString) => {
  return mongoose.connect(connString, { dbName: 'market-place' })
}

module.exports = connectDB