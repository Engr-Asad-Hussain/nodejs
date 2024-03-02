const { StatusCodes } = require('http-status-codes')

const routeNotExists = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send('Router does not exists.')
}

module.exports = routeNotExists