// express middleware are functions that executes during the request to the server.
// each middleware function has access to request and response objects
// req => middleware => route

const express = require('express')
const logger = require('./logger')
const app = express()

// add this middleware to all the routes that is written after app.use
// app.use(logger)

// add this middleware to all the routes that starts with /api
app.use('/api', logger) 

app.get('/', (req, res) => {
  console.log('This is the index route')
  res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
  console.log('This is the about route')
  res.status(200).send('About page')
})

app.get('/api/products', (req, res) => {
  res.status(200).send('Products')
})

app.get('/api/items', (req, res) => {
  res.status(200).send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000 ...')
})