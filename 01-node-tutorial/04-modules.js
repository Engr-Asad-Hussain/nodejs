// Common JS - Every file is a module (by default)
// Modules - Encapsulate code (share only required functions/variables)

const names = require("./3-exports")
// const data = require('./5-alternative-exports')
// console.log(data)

// require('./6-mind-granade') // invoke the module without export declaration

const sayHi = (name) => {
    console.log(`Hi ${name}! from the template strings.`)
}

sayHi("Fatima")
sayHi(names.asad)
sayHi(names.ahmed)