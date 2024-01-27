const { StatusCodes } = require('http-status-codes')
const { BadRequest } = require('../error')
const User = require('../model/User')

const register = async (req, res) => {
  const { name, email, password } = req.body

  // create the user in the database
  const user = await User.create({ name, email, password })

  // generate the accessToken from custom schema instance
  const token = user.genToken()
  res.status(StatusCodes.CREATED).json(
    { user: { name: user.name, email: user.email }, token }
  )
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequest('Please provide email and password fields.')
  }
  // filter the user based on the email address provided - unique constraint.
  const user = await User.findOne({ email })

  // check the user present in the database
  if (!user) {
    throw new BadRequest('User does not exists.')
  }

  // check the password of a user
  const isPasswordMatch = await user.comparePassword(password)
  if (!isPasswordMatch) {
    throw new BadRequest('Invalid credentials.')
  }

  // generate the accessToken
  const token = user.genToken()
  res.status(StatusCodes.OK).json(
    { user: { user: user.name, email: user.email }, token }
  )
}

module.exports = {
  login,
  register
}