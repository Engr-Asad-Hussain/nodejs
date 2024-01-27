const jwt = require('jsonwebtoken')
const { Unauthenticated } = require('../error')

const tokenValidator = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Unauthenticated('Authentication token is missing.')
  }
  const authToken = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(authToken, process.env.JWT_SECRET)
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new Unauthenticated('Token is not valid.')
  }
}

module.exports = tokenValidator