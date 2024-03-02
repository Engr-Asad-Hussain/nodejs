// express middleware are functions that executes during the request to the server.
// each middleware function has access to request and response objects
// req => middleware => route

const express = require('express')
const app = express()

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  console.log('This is the index route')
  res.status(200).send('Home page')
})

app.get('/about', logger, (req, res) => {
  console.log('This is the about route')
  res.status(200).send('About page')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000 ...')
})