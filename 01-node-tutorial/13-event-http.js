const http = require('http')

// const server = http.createServer((req, res) => {
//   res.write('This is the nodejs backend server.')
// })

// User EventEmitter
// http createServer behind the scene listens of specific events
// 
const server = http.createServer()

// this is same as we did in EventEmitter.
// whenever there is an hit to the request - it generates/emits an event: request
server.on('request', (req, res) => {
  res.write('This is the nodejs backend server.')
})

server.listen(port=5000, () => {
  console.log('Server is Listening on port 5000')
})