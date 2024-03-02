const express = require('express')
const logger = require('./logger')
const authorizer = require('./authorizer')
const app = express()

app.use([logger, authorizer])
// Own middleware functions
// Built-in or express middlewares - express.static(__dirname)
// Third-part middlewares - morgan

app.get('/api/products', (req, res) => {
  console.log('User instructions: ', req.user)
  res.status(200).send('This is the product sections')
})

app.get('/api/items', (req, res) => {
  res.status(200).send('This is the items sections')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000 ...')
})
