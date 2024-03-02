const http = require('http')

const server = http.createServer((req, res) => {
  // console.log('User hits this server')
  // res.end('User hits this server')

  // console.log(req)
  // console.log(req.method)
  // console.log(req.url)

  const url = req.url

  // home page routes
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h2>This is index page!</h2>')
    res.end()
  }
  // other routes
  else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('<h1>Web About Page</h1>')
    res.end()
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Page not found</h1>')
    res.end()
  }
})

server.listen(5000)