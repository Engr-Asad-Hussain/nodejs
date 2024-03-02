const express = require('express')
const path = require('path')
const app = express()


// setup static assets and middleware
// those files that server doesn't need to change or modify during runtime are static files.
// examples of such files are .svc, .css, javascript
// since for browser javascript is a dynamic file but for server it is just a simple file where server don't need to do anything for this file.
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('Resource not available')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})