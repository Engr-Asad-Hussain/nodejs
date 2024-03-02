const express = require('express')
const app = express()

// all the browser-app has default method of GET
app.get('/', (req, res) => {
  res.status(200).send('This is the index page')
})

app.get('/about', (req, res) => {
  res.status(200).send('<h2>This is the about section</h2>')
})

// all the routes that doesn't match will goes here
app.all('*', (req, res) => {
  res.status(404)
  res.send('Resource not found')
})

// this is same as http.listen method
app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})