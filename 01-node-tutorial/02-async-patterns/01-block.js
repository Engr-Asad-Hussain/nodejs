const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to home page dude!')
    res.end()
  }
  else if (req.url === '/about') {
    for (let i = 0; i <= 1000; i++) {
      for (let j = 0; j <= 1000; j++) {
        console.log(`${i} | ${j}`)
        res.write('Welcome to about section!')
        res.end()
      }
    }
  }
  else {
    res.write('Something went wrong! Page not found.')
    res.end()
  }
})

server.listen(port=5000, () => {
  console.log('Server Listening on port 5000')
})