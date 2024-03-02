// Synchronous FileSystem
const { readFileSync, writeFileSync } = require('fs')

console.log('... Starting')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first)
console.log(second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    // { flag: 'a' } // append existing
)
console.log('... Done with the task!')
console.log('... Starting next task.')