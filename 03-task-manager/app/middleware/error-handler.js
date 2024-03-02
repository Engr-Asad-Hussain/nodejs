const { ApiExceptions } = require('../error/base-class')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ApiExceptions) {
    console.log('ApiException: ', err)
    res.status(err.statusCode).json({ message: err.message })
  } else {
    res.status(500).send({ message: 'Something went wrong, please try again later.' })
  }
}

module.exports = errorHandlerMiddleware