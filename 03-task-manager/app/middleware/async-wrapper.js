// this is a wrapper for try/catch block
// in every controller function we are repeating try/catch again and again.
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    } catch (error) {
      next(error)
    }
  }
}

// keyward next is used to pass to the next middleware - in our case is errorHandleMiddleware
module.exports = asyncWrapper