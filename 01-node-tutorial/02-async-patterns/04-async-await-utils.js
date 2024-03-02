const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (filePath) => {
//   return new Promise((resolve, reject) => {
//     readFile(filePath, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// const writeText = (filePath, data) => {
//   return new Promise((resolve, reject) => {
//     writeFile(filePath, data, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

const gatherFiles = async () => {
  try {
    // Read Text Files
    const first = await readFilePromise('./content/first.txt', 'utf-8')
    const second = await readFilePromise('./content/second.txt', 'utf-8')
    console.log(first, second)

    // Write Text File
    await writeFilePromise(
      './content/mind-async.txt', 
      `This is Awesome: ${first}, ${second}`,
      { flag: 'a' }
    )
  } catch (error) {
    console.log(error)
  }
}

gatherFiles()