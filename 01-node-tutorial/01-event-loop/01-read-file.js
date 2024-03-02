const { readFile } = require('fs')

console.log('... Start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('... Result Found')
})
// Since readFile is an asynchronous function, NodeJs event loop will offload
// this function and register it in callback. Then after the execution of code it will 
// execute the function callback.

console.log('... End')