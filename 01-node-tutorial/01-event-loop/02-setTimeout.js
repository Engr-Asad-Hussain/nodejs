console.log('... Start')
setTimeout(() => {
    console.log('setTimeout')
}, 0)
console.log('... End')

// Even though setTimeout is set to 0 microseconds, the event loop still move the callback function
// in the callback registry and then it runs after the code has been executed.