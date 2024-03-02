// Streams
// Streams are used to read or write data sequentially (in chunks) in a continuous fashion. 
// Basically when we have to handle and manipulate streaming data 
// for example continuous source or a big file - streams can be very handy.

// There are 4 different types of streams:
// Writeable - Used to write data sequentially.
// Readable - Used to read data sequentially.
// Duplex - Used to both read and write data sequentially.
// Transform - Where the data can be modified when writing or reading.

// Streams extends from the EventEmitter class which simply means we can use events on streams.

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')
// default 64 KiB of chunk
// highWaterMark - control the return buffer size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf-8' })

stream.on('data', (chunk) => {
  console.log(chunk)
})
stream.on('error', (error) => {
  console.log(`Unable to generate chunk response. ${error}`)
})