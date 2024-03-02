const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Server is responding!')
  res.end()
})

server.listen(5000, () => {
  console.log('Server listening on port 5000 ...')
})