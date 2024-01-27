const { StatusCodes } = require('http-status-codes'
)
class ApiException extends Error {
  constructor(message) {
    super(message)
  }
}

class BadRequest extends ApiException {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class Unauthenticated extends ApiException {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

class DoesNotExists extends ApiException {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = {
  ApiException,
  BadRequest,
  Unauthenticated,
  DoesNotExists
}