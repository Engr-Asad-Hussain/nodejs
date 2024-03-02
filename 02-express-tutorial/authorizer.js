const authorizer = (req, res, next) => {
  const { username } = req.query
  if (username === 'admin@voxsire.com') {
    req.user = { name: 'Asad Hussain', uid: 20, role: 'Global Admin' }
    next()
  }
  else {
    res.status(401).send('Unauthorized')
  }
}

module.exports = authorizer