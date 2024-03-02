const express = require('express')
const { people } = require('./data')
const app = express()

// built-in middleware for static assets
app.use(express.static('./methods-public'))

// parse the form-data object
app.use(express.urlencoded({ extended: true }))

// parse the json-data object
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json(people)
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}!.`)
  }
  else {
    return res.status(400).send('Please provide username.')
  }
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, message: 'Please provide name.' })
  }
  return res.status(201).json({ success: true, person: name })
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  // ...
})

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params
  // ...
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000 ...')
})