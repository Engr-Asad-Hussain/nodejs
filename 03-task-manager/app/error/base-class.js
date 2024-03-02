// ApiExceptions class inherits from Error built-in JavaScript class
// following is analogous to Python
// class ApiExceptions(Error): 
//    def __init__(self, message, status_code):
//        super(message)
//        self.status_code = status_code

class ApiExceptions extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
  }
  // constructor is analogous to __init__ class method in Python.
  // super meaning is same as super in Python.
}

const createException = (message, statusCode) => {
  return new ApiExceptions(message, statusCode)
}

module.exports = {
  ApiExceptions,
  createException
}