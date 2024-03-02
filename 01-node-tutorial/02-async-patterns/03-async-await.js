const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

const getText = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

const writeText = (filePath, data) => {
  return new Promise((resolve, reject) => {
    writeFile(filePath, data, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const gatherFiles = async () => {
  try {
    // Read Text Files
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    console.log(first, second)

    // Write Text File
    await writeText(
      './content/mind-async.txt', 
      `This is Awesome: ${first}, ${second}`
    )
  } catch (error) {
    console.log(error)
  }
}

gatherFiles()