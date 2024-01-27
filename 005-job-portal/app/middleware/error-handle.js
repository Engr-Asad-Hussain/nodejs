const { StatusCodes } = require('http-status-codes')
const { ApiException } = require("../error")

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiException) {
    return res.status(err.statusCode).json({ message: err.message })
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandler