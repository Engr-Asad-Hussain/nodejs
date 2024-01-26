const mongoose = require('mongoose')

const connectDB = (connString) => {
  return mongoose.connect(connString, { dbName: 'products' })
}

module.exports = connectDB