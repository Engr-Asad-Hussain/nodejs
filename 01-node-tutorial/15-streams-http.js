const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf-8')
  // res.write(text)
  // res.end()

  const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.write(err)
    res.end()
  })
})

server.listen(5000, () => {
  console.log('Server is listening on port 5000')
})

